import React from "react";
import styled from "styled-components";

const TimerMsg = ({ stack }) => {
  const perMsgByStack = {
    default: "오늘도 달려볼까요?",
    step1: "저랑 같이 성장해봐요!",
    step2: "정말 멋져요!",
    step3: "잘 하고 있어요!",
    step4: "할 수 있어요!",
    step5: "거의 다 됐어요!",
    step6: "대단해요!",
    rest: "휴식은 아주 중요해!",
  };
  return (
    <>
      <StMsg>{perMsgByStack[stack]}</StMsg>
    </>
  );
};

export default TimerMsg;

const StMsg = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 226px;
  font-size: 1.4rem;
  font-family: "Pretendard";
  font-style: normal;

  font-weight: 500;
  color: #403b36;
`;
