import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//api import
import { __getCalendar } from "../../redux/modules/calendarSlice.js";

//컴포넌트 Import
import Header from "../header/Header";
import TodayBtn from "./TodayBtn";

//캘린더 라이브러리 관련 import
import Calendar from "react-calendar";
import moment from "moment";
import "../calendar/style/Calendar.css"; // css import

//svg Import
import { IMAGES } from "../../constants/images.js";

const CalendarGet = () => {
  const dispatch = useDispatch();
  const GetCalendarData = useSelector((state) => state.calendarSlice);
  const navigate = useNavigate();

  const getColorStages = useSelector(
    (state) => state.calendarSlice.colorStages
  );

  //이번달로 이동하기 위한 useRef 사용
  const calendarRef = useRef();

  //현재 날짜 불러와서 데이터 get하기
  const todayYear = moment().format("YYYY");
  const todayMonth = moment().format("MM");

  const username = "테스트";
  //현재 날짜에 맞는 월 데이터 불러오기
  useEffect(() => {
    dispatch(__getCalendar({ todayYear, todayMonth, username }));
  }, []);

  //data에서 단계별로 분류하기
  const mark1 = getColorStages[0]?.colorStage1;
  const mark2 = getColorStages[0]?.colorStage2;
  const mark3 = getColorStages[0]?.colorStage3;
  const mark4 = getColorStages[0]?.colorStage4;

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
  const ClickDayHandler = (value, event) => {
    navigate("/login"); //임시
  };

  const [value, setValue] = useState(new Date());

  return (
    <>
      <Header
        menuName="Calendar"
        right={IMAGES.menu}
        left={IMAGES.home}
      ></Header>
      <CalendarStyle>
        <ProfileLayout>
          {/* <Profile /> */}
          <img src={GetCalendarData?.profileImage} />
          {/* <img src="https://velog.velcdn.com/images/posinity/post/5a8adab6-f8de-41e5-a915-2b7592b35960/image.png" /> */}
        </ProfileLayout>
        <NickName>{GetCalendarData?.username}</NickName>
        <MonthlyGet>
          {GetCalendarData?.username}님의 이번달 총 수확량은
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
            onViewChange={({ action, activeStartDate, value, view }) =>
              console.log("New activeStartDate is: ", activeStartDate)
            }
            // 이전,다음 버튼 사용할 때 호출되는 함수
            onActiveStartDateChange={ClickArrowHandler}
            //하루를 클릭할 때 호출되는 함수
            onClickDay={ClickDayHandler}
            //해당 잔디 색깔 표시하기
            tileClassName={({ date, view }) => {
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
            }}
          />
          <TodayBtn onClickToday={ClickTodayHandler} />
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
  min-height: 722px; //812px에서 헤더 90px을 뺀 값을 줘야 스크롤이 안생김
`;

export const ProfileLayout = styled.div`
  margin-top: 43px;
`;

export const NickName = styled.h2`
  margin-top: 43px;
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 2.4rem;
`;

export const MonthlyGet = styled.p`
  margin-top: 43px;
  font-family: "Pretendard-Regular";
  font-weight: 500;
  font-size: 1.4rem;
  color: #403b36;
  strong {
    font-weight: 700;
    font-size: 1.8rem;
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
