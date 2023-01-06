import React, { useState } from "react";
import styled from "styled-components";
import Header from "../header/Header";

//캘린더 라이브러리 관련 import
import Calendar from "react-calendar";
import moment from "moment";
import "../calendar/style/Calendar.css"; // css import

//svg Import
import { ReactComponent as Profile } from "../../assets/images/calendar/profile_pic.svg";
import { ReactComponent as PreviousArrow } from "../../assets/images/calendar/previous_month.svg";
import { ReactComponent as NextArrow } from "../../assets/images/calendar/next_month.svg";

const CalendarGet = () => {
  const [value, onChange] = useState(new Date());

  const mark1 = ["11-01-2023", "01-01-2023", "01-02-2023"];
  const mark2 = ["2023-01-12", "2023-01-15", "2023-01-19"];
  const mark3 = ["2022-01-22", "2022-01-25", "2022-01-29"];
  const mark4 = ["2022-01-04", "2022-01-14", "2022-01-24"];

  return (
    <>
      <Header menuName="Calendar" />
      <CalendarStyle>
        <ProfileLayout>
          <Profile />
        </ProfileLayout>
        <NickName>닉네임</NickName>
        <MonthlyGet>
          닉네임님의 이번주 평균 수확량은 <strong>7</strong>
          개입니다
        </MonthlyGet>
        <Calendar
          onChange={onChange}
          value={value}
          calendarType="US" //요일을 일요일부터 시작하게
          formatDay={(locale, date) =>
            date.toLocaleString("en", { day: "numeric" })
          } //'일'글자 제거
          formatShortWeekday={(locale, date) =>
            ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
          } //요일 표시 수정
          nextLabel={<NextArrow />}
          prevLabel={<PreviousArrow />}
          next2Label={null} //년 이동 삭제
          prev2Label={null} //년 이동 삭제
          //해당 잔디 색깔 표시하기
          tileClassName={({ date, view }) => {
            if (mark2.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              return "state2";
            }
          }}
        />
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
