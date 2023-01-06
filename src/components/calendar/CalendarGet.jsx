import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//api import
import { __getCalendar } from "../../redux/modules/calendarSlice.js";

//컴포넌트 Import
import Header from "../header/Header";
import TodayBtn from "./style/TodayBtn";

//캘린더 라이브러리 관련 import
import Calendar from "react-calendar";
import moment from "moment";
import "../calendar/style/Calendar.css"; // css import

//svg Import
import { ReactComponent as Profile } from "../../assets/images/calendar/profile_pic.svg";
import { ReactComponent as PreviousArrow } from "../../assets/images/calendar/previous_month.svg";
import { ReactComponent as NextArrow } from "../../assets/images/calendar/next_month.svg";

const CalendarGet = () => {
  useEffect(() => {
    dispatch(__getCalendar({ todayYear, todayMonth }));
  }, []);

  const dispatch = useDispatch();
  const GetCalendarData = useSelector((state) => state.calendarSlice.data);

  const [value, setValue] = useState(new Date());

  const todayYear = moment().format("YYYY");
  const todayMonth = moment().format("MM");

  const mark1 = GetCalendarData?.stage1;
  const mark2 = GetCalendarData?.stage2;
  const mark3 = GetCalendarData?.stage3;
  const mark4 = GetCalendarData?.stage4;

  const onClickToday = () => {
    setValue(new Date(2023, 11));
  };

  const onClickArrowHandler = ({ action, activeStartDate, value, view }) => {
    const todayYear = moment(activeStartDate).format("YYYY");
    const todayMonth = moment(activeStartDate).format("MM");
    console.log(view);
    dispatch(__getCalendar({ todayYear, todayMonth }));
  };

  return (
    <>
      <Header menuName="Calendar" />
      <CalendarStyle>
        <ProfileLayout>
          <Profile />
          {/* <img src={GetCalendarData?.profileImage} /> */}
        </ProfileLayout>
        <NickName>{GetCalendarData?.username}</NickName>
        <MonthlyGet>
          {GetCalendarData?.username}님의 이번주 평균 수확량은
          <strong>{GetCalendarData?.monthlyAverageCarrot}</strong>
          개입니다
        </MonthlyGet>
        <CalendarLayout>
          <TodayBtn />
          <button onClick={onClickToday}>이번달 이동</button>
          <Calendar
            onChange={setValue}
            value={value}
            nextLabel={<NextArrow />}
            prevLabel={<PreviousArrow />}
            next2Label={null} //년 이동 삭제
            prev2Label={null} //년 이동 삭제
            calendarType="US" //요일을 일요일부터 시작하게
            formatDay={(locale, date) =>
              date.toLocaleString("en", { day: "numeric" })
            } //'일'글자 제거
            formatShortWeekday={(locale, date) =>
              ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
            } //요일 표시 수정
            // 년도를 클릭해서 월로 바로 이동할 때 호출되는 함수
            onViewChange={({ action, activeStartDate, value, view }) =>
              console.log("New activeStartDate is: ", activeStartDate)
            }
            // 이전,다음 버튼 사용할 때 호출되는 함수
            onActiveStartDateChange={onClickArrowHandler}
            //하루를 클릭할 때 호출되는 함수
            onClickDay={(value, event) => console.log("이동 가능?")}
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
  min-height: 758px; //812px에서 헤더 54px을 뺀 값을 줘야 스크롤이 안생김
`;

export const ProfileLayout = styled.div`
  margin-top: 43px;
`;

export const NickName = styled.h2`
  margin-top: 43px;
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 24px;
`;

export const MonthlyGet = styled.p`
  margin-top: 43px;
  font-family: "Pretendard-Regular";
  font-weight: 500;
  font-size: 14px;
  color: #403b36;
  strong {
    font-weight: 700;
    font-size: 18px;
    color: #f27808;
    padding: 0 2px 0 2px;
  }
`;

export const CalendarLayout = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`;
