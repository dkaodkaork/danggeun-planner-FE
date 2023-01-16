import React from "react";
import styled from "styled-components";

const PlanCard = ({ color }) => {
  return (
    <StContainer>
      <StCardLabel color={color}></StCardLabel>
      <StCard>
        <StTitle>
          첫번째 일정 <StText> (연속1) </StText>
        </StTitle>
        <StTime>8:00 - 10:00</StTime>
      </StCard>
    </StContainer>
  );
};

export default PlanCard;

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StCardLabel = styled.div`
  width: 15px;
  height: 66px;
  background-color: ${({ color }) => color};
  border-radius: 12px 0px 0px 12px;
`;

const StCard = styled.div`
  background: #fffdfa;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 12px;
  gap: 8px;
  width: 315px;
  height: 66px;

  border: 1px solid #f1e5d2;
  border-radius: 0px 12px 12px 0px;
`;

const StTitle = styled.div`
  width: 291px;
  height: 17px;

  display: flex;
  flex-direction: row;
  gap: 5px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #595550;
`;

const StText = styled.span`
  color: #f27808;
`;

const StTime = styled.div`
  width: 68px;
  height: 14px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #a4a4a4;
`;
