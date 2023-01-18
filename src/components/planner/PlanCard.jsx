import React from "react";
import styled from "styled-components";
import { IMAGES } from "../../constants/index";

const PlanCard = ({ color, content, startTime, endTime, count, onClick }) => {
  const carrotSticker = () => {
    if (count) {
      const carrots = [];
      for (let i = 0; i < count; i++) {
        carrots.push(<div key={i}>{IMAGES.carrotSticker}</div>);
      }

      return carrots;
    }
  };

  return (
    <StContainer onClick={onClick}>
      <StCardLabel color={color}></StCardLabel>
      <StCard>
        <StTitle>
          {content}
          {count ? <StText> (연속{count}) </StText> : null}
        </StTitle>
        <StDiv>
          <StTime>
            {startTime} - {endTime}
          </StTime>
          {count ? <StCarrotSticker>{carrotSticker()}</StCarrotSticker> : null}
        </StDiv>
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
  height: 14px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #a4a4a4;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
`;

const StCarrotSticker = styled.div`
  display: flex;
  flex-direction: row;
`;
