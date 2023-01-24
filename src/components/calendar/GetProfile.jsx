import React from "react";
import styled from "styled-components";
import { ReactComponent as TodayBtnIcon } from "../../assets/images/calendar/todayBtnIcon.svg";
import ProfileImg from "../element/ProfileImg.jsx";

const GetProfile = ({ GetCalendarData }) => {
  return (
    <>
      <StProfileLayout>
        <ProfileImg
          src={GetCalendarData?.profileImage}
          width="125px"
          height="125px"
        />
      </StProfileLayout>
      <StNickName>{GetCalendarData?.username}</StNickName>
      <StMonthlyGet>
        {GetCalendarData?.username}님의 이번달 총 수확량은{" "}
        <strong>{GetCalendarData?.carrot}</strong>
        개입니다
      </StMonthlyGet>
    </>
  );
};

export default GetProfile;

const StProfileLayout = styled.div`
  margin-top: 34px;
`;

const StNickName = styled.h2`
  margin-top: 24px;
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 2.4rem;
  color: #595550;
`;

const StMonthlyGet = styled.p`
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
