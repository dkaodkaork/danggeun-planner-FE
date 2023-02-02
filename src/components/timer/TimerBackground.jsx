import React from "react";
import styled from "styled-components";

import { IMAGES } from "../../constants/index";

import Timer from "./Timer";

const TimerBackground = ({
  stack,
  parsedTime,
  isClear,
  perBtnByMode,
  mode,
  strokeDashoffset,
  circumference,
}) => {
  const perImageByStack = {
    default: IMAGES.defalut,
    step1: IMAGES.step1,
    step2: IMAGES.step2,
    step3: IMAGES.step3,
    step4: IMAGES.step4,
    step5: IMAGES.step5,
    step6: IMAGES.step6,
    rest: IMAGES.rest,
  };

  const perDelayByStack = {
    default: "0.7s",
    step1: "0s",
    step2: "0.7s",
    step3: "0.7s",
    step4: "0.7s",
    rest: "0.7s",
  };

  return (
    <>
      <StBackground url={perImageByStack[stack]} delay={perDelayByStack[stack]}>
        <Timer
          parsedTime={parsedTime}
          isClear={isClear}
          strokeDashoffset={strokeDashoffset()}
          circumference={circumference}
        />
        <StButtonBox>
          {isClear ? perBtnByMode[mode].start : perBtnByMode[mode].rest}
        </StButtonBox>
      </StBackground>
    </>
  );
};

export default TimerBackground;

const StBackground = styled.div`
  background-image: url(${(props) => props.url});
  /* transition: 1s; */
  transition: ${(props) => props.delay};
  /* 처음만 적용안되게  */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

const StButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
