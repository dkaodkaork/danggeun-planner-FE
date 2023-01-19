import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

//api import
import { __getCalendar } from "../../redux/modules/calendarSlice.js";
//메뉴 오픈 관련
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

//컴포넌트 Import
import Header from "../header/Header";
import TodayBtn from "./TodayBtn";
import ProfileImg from "../element/ProfileImg.jsx";

//캘린더 라이브러리 관련 import
import Calendar from "react-calendar";
import moment from "moment";
import "../calendar/style/Calendar.css"; // css import

//svg Import
import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/path.js";

const CalendarGet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //닉네임 받기
  const param = useParams();
  const username = param.username;

  const GetCalendarData = useSelector((state) => state.calendarSlice);

  const getColorStages = useSelector(
    (state) => state.calendarSlice.colorStages
  );

  //메뉴 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);
  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  //이번달로 이동하기 위한 useRef 사용
  const calendarRef = useRef();

  //현재 날짜 불러와서 데이터 get하기
  const todayYear = moment().format("YYYY");
  const todayMonth = moment().format("MM");

  //현재 날짜에 맞는 월 데이터 불러오기
  useEffect(() => {
    dispatch(__getCalendar({ todayYear, todayMonth, username }));
  }, [groupMenuOpen]);

  //data에서 단계별로 분류하기
  const mark1 = getColorStages[0]?.colorStage1;
  const mark2 = getColorStages[0]?.colorStage2;
  const mark3 = getColorStages[0]?.colorStage3;
  const mark4 = getColorStages[0]?.colorStage4;

  //오늘 날짜 단계 저장
  const todayStage = GetCalendarData?.todayColorStage;

  //이번달로 이동하는 핸들러
  const ClickTodayHandler = () => {
    const calendar = calendarRef.current;
    const firstDayOfTodaysMonth = moment().date(1).toDate();
    calendar.setActiveStartDate(firstDayOfTodaysMonth);
  };

  //다른 월로 이동했을 때 그 월에 맞는 데이터를 불러오는 핸들러
  const ClickArrowHandler = ({ action, activeStartDate, value, view }) => {
    const todayYear = moment(activeStartDate).format("YYYY");
    const todayMonth = moment(activeStartDate).format("MM");
    dispatch(__getCalendar({ todayYear, todayMonth, username }));
  };

  //버튼을 눌렀을 때 플래너로 이동하는 핸들러
  const ClickDayHandler = (value) => {
    const date = moment(value).format("YYYY-MM-DD");
    navigate(PATH.planner(username, date));
  };

  const [value, setValue] = useState(new Date());

  return (
    <>
      <Header
        menuName="Calendar"
        right={IMAGES.menu}
        left={IMAGES.home}
        leftLink={PATH.timer}
        clickMenuHandler={clickGroupMenuHandler}
      ></Header>
      <CalendarStyle>
        <ProfileLayout>
          <ProfileImg
            src={GetCalendarData?.profileImage}
            width="125px"
            height="125px"
          />
        </ProfileLayout>
        <NickName>{GetCalendarData?.username}</NickName>
        <MonthlyGet>
          {GetCalendarData?.username}님의 이번달 총 수확량은{" "}
          <strong>{GetCalendarData?.carrot}</strong>
          개입니다
        </MonthlyGet>
        <CalendarLayout>
          <Calendar
            ref={calendarRef}
            onChange={setValue}
            value={value}
            nextLabel={IMAGES.nextArrow}
            prevLabel={IMAGES.previousArrow}
            next2Label={null} //년 이동 삭제
            prev2Label={null} //년 이동 삭제
            calendarType="US" //요일을 일요일부터 시작하게
            formatDay={(locale, date) =>
              date.toLocaleString("en", { day: "numeric" })
            } //'일'글자 제거
            // formatShortWeekday={(locale, date) =>
            //   ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
            // } //요일 표시 수정
            // 년도를 클릭해서 월로 바로 이동할 때 호출되는 함수
            // onViewChange={({ activeStartDate }) =>
            //   console.log("New activeStartDate is: ", activeStartDate)
            // }
            // 이전,다음 버튼 사용할 때 호출되는 함수
            onActiveStartDateChange={ClickArrowHandler}
            //하루를 클릭할 때 호출되는 함수
            onClickDay={ClickDayHandler}
            //해당 잔디 색깔 표시하기
            tileClassName={({ date }) => {
              if (mark1?.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                return "state1";
              }
              if (mark2?.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                return "state2";
              }
              if (mark3?.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                return "state3";
              }
              if (mark4?.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                return "state4";
              }
              if (
                moment().format("YYYY-MM-DD") ===
                moment(date).format("YYYY-MM-DD")
              ) {
                switch (todayStage) {
                  case 0:
                    break;
                  case 1:
                    return "todayState1";
                    break;
                  case 2:
                    return "todayState2";
                    break;
                  case 3:
                    return "todayState3";
                    break;
                  case 4:
                    return "todayState4";
                    break;
                }
              }
            }}
          />
          <TodayBtnLayout>
            <TodayBtn onClickToday={ClickTodayHandler} />
          </TodayBtnLayout>
        </CalendarLayout>
      </CalendarStyle>
    </>
  );
};

export default CalendarGet;

export const CalendarStyle = styled.div`
  background-color: #f9f3ea;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 740px; //812px에서 헤더값 뺌
`;

export const ProfileLayout = styled.div`
  margin-top: 34px;
`;

export const NickName = styled.h2`
  margin-top: 24px;
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 2.4rem;
  color: #595550;
`;

export const MonthlyGet = styled.p`
  margin-top: 24px;
  font-family: "Pretendard-Regular";
  font-weight: 500;
  font-size: 1.4rem;
  color: #403b36;
  strong {
    font-family: "Pretendard-bold";
    font-weight: 700;
    font-size: 1.6rem;
    color: #f27808;
    padding: 0 2px 0 2px;
  }
`;

export const CalendarLayout = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const TodayBtnLayout = styled.div`
  margin-top: 24px;
`;
