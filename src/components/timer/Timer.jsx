import React from "react";
import styled from "styled-components";

const Timer = ({ parsedTime, circumference, strokeDashoffset, isClear }) => {
  return (
    <StTimerContainer>
      <StTimer>
        <StTime>{parsedTime || "00:00"}</StTime>
        <StSvg>
          <StCircle cx={130} cy={130} r={130} stroke="#ffcd9f" fill="none" />
        </StSvg>
        <StSvg>
          <StCircle
            strokeDasharray={circumference}
            strokeDashoffset={!isClear ? strokeDashoffset : 0}
            cx={130}
            cy={130}
            r={130}
            stroke="#f27808"
            fill="none"
            strokeLinecap="round"
          />
        </StSvg>
      </StTimer>
    </StTimerContainer>
  );
};

export default Timer;

const StTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 72px 58px 33px 57px;
`;

const StTimer = styled.div`
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
`;

const StTime = styled.p`
  color: #595550;
  font-size: 7rem;
`;

const StSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg) rotateZ(-90deg) rotateX(180deg);
  overflow: visible;
`;

const StCircle = styled.circle`
  stroke: ${({ color }) => color};
  stroke-width: 5;
`;
