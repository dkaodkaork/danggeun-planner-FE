import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import useTimer from "../../hooks/useTimer";
import { IMAGES } from "../../constants/index";
import Button from "./TimerButton";
import GetCarrot from "./GetCarrot";
import { useDispatch, useSelector } from "react-redux";
import { __startTimer, __finsihTimer } from "../../redux/modules/timerSlice";

const Timer = () => {
  const [stack, setStack] = useState("");
  const [mode, setMode] = useState(1);
  const [count, setCount] = useState(0);
  const [restCount, setRestCount] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.timer.data);

  // eslint-disable-next-line
  //0.25 * 1000 * 60
  const startTime = 1000 * 4;
  const restTime = 1000 * 2;
  const longRestTime = 1000 * 3;
  const [time, setTime] = useState(startTime);

  const {
    clearTimer,
    startTimer,
    isClear,
    parsedTime,
    currentTime,
    setCurrentTime,
  } = useTimer(
    () => {
      console.log("종료");
      if (restCount) {
        dispatch(__finsihTimer({ timerId: data.timerId }));
        // console.log("currentTime:", currentTime);
        // console.log("isClear:", isClear);
      }
    }, // call back
    startTime
  );

  // useEffect(() => {
  //   window.addEventListener("click", () => {
  //     console.log("클릭했어용");
  //     return;
  //   });
  // }, []);

  useLayoutEffect(() => {
    if (mode === 1) {
      if (currentTime <= 4000 && currentTime > 3000) {
        setStack("step1");
        console.log("step1");
      } else if (currentTime <= 3000 && currentTime > 2000) {
        setStack("step2");
        console.log("step2");
      } else if (currentTime <= 2000 && currentTime > 1000) {
        setStack("step3");
        console.log("step3");
      } else if (currentTime <= 1000 && currentTime > 0) {
        setStack("step4");
        console.log("step4");
      } else {
        setStack("default");
        console.log("default");
      }
    } else if (mode === 2) {
      setStack("rest");
    }
  }, [currentTime, mode]);

  useEffect(() => {
    if (!currentTime && isClear) {
      // clearTimer(currentTime);
    }
  }, []);

  const startClickHandler = () => {
    setCount(count + 1);
    startTimer(time);
    dispatch(__startTimer());
  };

  const quitClickHandler = () => {
    // if (mode === 1) {
    setCount(0);
    clearTimer(time);
    // }
  };

  const changeRestModeHandler = () => {
    // clearTimer(restTime);
    setCurrentTime(restTime);
    setMode(2); // 휴식 모드로 바꿔주자
  };

  const startRestHandler = () => {
    if (currentTime === 0) {
      if (count === 2) {
        startTimer(longRestTime);
        setCount(0);
        // setRestCount(!restCount);
      } else {
        setMode(1);
        startTimer(startTime);
        setCount(count + 1);
        dispatch(__startTimer());
        setRestCount(!restCount);
      }
    } else {
      startTimer(restTime);
      console.log("currentTime:", currentTime);
      console.log("time", time);
      setRestCount(!restCount);
      // setTime(startTime);
    }
  };

  const skipRestClickHandler = () => {
    clearTimer(0);
  };

  const focusMode = {
    start:
      currentTime === 0 ? (
        <GetCarrot onClick={changeRestModeHandler} />
      ) : (
        <Button onClick={startClickHandler}>{"집중 시작하기"}</Button>
      ),
    rest: (
      <Button
        onClick={quitClickHandler}
        color="#614925"
        backgroundColor="transparent"
        fontSize="2.2rem"
        textDecoration="underline"
        underlinePosition="under"
        filter="none"
        fontWeight="400"
        fontFamily="MaplestoryOTFLight"
      >
        포기하기?
      </Button>
    ),
  };

  const restMode = {
    start: (
      <Button onClick={startRestHandler}>
        {currentTime === 0
          ? count === 2
            ? "긴 휴식하기"
            : "집중 시작하기2"
          : "휴식하기"}
      </Button>
    ),
    rest: (
      <Button
        onClick={skipRestClickHandler}
        color="#614925"
        backgroundColor="transparent"
        fontSize="2.2rem"
        textDecoration="underline"
        underlinePosition="under"
        filter="none"
        fontWeight="400"
        fontFamily="MaplestoryOTFLight"
      >
        휴식 건너뛰기
      </Button>
    ),
  };

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

  const perDelayByStack = {
    default: "0.7s",
    step1: "0s",
    step2: "0.7s",
    step3: "0.7s",
    step4: "0.7s",
    rest: "0.7s",
  };

  const perBtnByMode = {
    1: focusMode,
    2: restMode,
  };

  return (
    <div>
      <StBackground url={perImageByStack[stack]} delay={perDelayByStack[stack]}>
        <Header justifyContent="right" right={IMAGES.menu}></Header>
        <StTimerContainer>
          {/* <div
            style={{
              pointerEvents: isPlaying ? "none" : "all",
              opacity: isPlaying ? 0.4 : 1,
            }}
          >
            <StButton onClick={!isPlaying ? startTimer : () => {}}>
              start
            </StButton>
          </div>
          <StTimerDiv>
            <StPtag>{parsedTime || "00:00"}</StPtag>
            <Stsvg>
              <circle
                cx="10px"
                cy="10px"
                r="10px"
                fill="none"
                stroke="green"
                strokeWidth="10px"
              ></circle>
            </Stsvg>
            <Stsvg><circle strokeDasharray></circle></Stsvg>
          </StTimerDiv> */}

          <StTimer>{parsedTime || "00:00"}</StTimer>
          {isClear ? perBtnByMode[mode].start : perBtnByMode[mode].rest}
          <StMsg>{perMsgByStack[stack]}</StMsg>
        </StTimerContainer>
      </StBackground>
    </div>
  );
};

export default Timer;

const StTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StTimer = styled.div`
  width: 260px;
  height: 260px;
  margin: 54px 58px 33px 57px;
  border-radius: 50%;
  font-size: 7rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffdfa;
  color: #595550;
  border: 3px solid #f27808;

  /* transition-property: border;
transition-duration: 4s;
transition-timing-function: linear; */
  /* transition: border 4s linear; */

  /* :hover {
    border: 1px solid black;
  } */
`;

const StMsg = styled.p`
  margin-top: 226px;
  font-size: 1.4rem;
  font-family: "Pretendard";
  font-style: normal;

  font-weight: 500;
  color: #403b36;
`;

const StBackground = styled.div`
  background-image: url(${(props) => props.url});
  /* transition: 1s; */
  transition: ${(props) => props.delay};
  /* 처음만 적용안되게  */
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  height: 812px;
`;

const StButton = styled.button`
  font-size: 16px;
  padding: 15px 40px;
  margin: 10px auto 30px;
  display: block;
  background-color: #4d4d4d;
  color: lightgray;
  border: none;
  cursor: pointer;
  outline: 0;
`;

const StTimerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
  width: 80px;
  height: 80px;
`;

const StPtag = styled.p`
  color: green;
  font-size: 20px;
`;

const Stsvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY("-180deg") rotateZ("-90deg");
  overflow: visible;
`;
