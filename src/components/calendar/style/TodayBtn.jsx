import React from "react";
import styled from "styled-components";
import { ReactComponent as TodayBtnIcon } from "../../../assets/images/calendar/todayBtnIcon.svg";

const TodayBtn = () => {
  return (
    <BtnLayout>
      <TodayBtnIcon />
      <BtnText>Today</BtnText>
    </BtnLayout>
  );
};

export default TodayBtn;

const BtnLayout = styled.div`
  height: 30px;
  width: 112px;
  border-radius: 12px;
  padding: 8px, 26px, 8px, 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fffdfa;
  gap: 2px;
`;

const BtnText = styled.div`
  font-family: "MaplestoryOTFLight";
  font-size: 13px;
  color: #4a8a51;
`;
