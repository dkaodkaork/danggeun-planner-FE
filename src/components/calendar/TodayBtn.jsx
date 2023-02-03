import React from "react";
import styled from "styled-components";
import { IMAGES } from "../../constants/index";

const TodayBtn = ({ onClickToday }) => {
  return (
    <BtnLayout onClick={onClickToday}>
      {IMAGES.todayBtnIcon}
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
  background: #f9f3ea;
  gap: 2px;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border: 1px solid #4a8a51;
`;

const BtnText = styled.div`
  font-family: "MaplestoryOTFLight";
  font-size: 13px;
  color: #4a8a51;
`;
