import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import useTimer from "../../hooks/useTimer";
import { IMAGES } from "../../constants/index";
import Button from "./TimerButton";
import GetCarrot from "./GetCarrot";
import { useDispatch, useSelector } from "react-redux";
import { __startTimer, __finsihTimer } from "../../redux/modules/timerSlice";
import Timer from "./Timer";
import TimerBackground from "./TimerBackground";

const CarrotTimer = () => {
  const [stack, setStack] = useState("");
  const [mode, setMode] = useState("focusMode");
  const [count, setCount] = useState(0);
  const [restCount, setRestCount] = useState(true);
  // const [isPlaying, setIsPlaying] = useState(false);

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
      // console.log("종료");
      if (restCount) {
        dispatch(__finsihTimer({ timerId: data.timerId }));
      }
    }, // call back
    startTime
  );

  const date = new Date();
  const date1 = Date.now();
  // .toTimeString();
  // .split(" ")[0];
  console.log(date);
  console.log(date1);

  useLayoutEffect(() => {
    if (mode === "focusMode") {
      if (currentTime <= 4000 && currentTime > 3000) {
        setStack("step1");
      } else if (currentTime <= 3000 && currentTime > 2000) {
        setStack("step2");
      } else if (currentTime <= 2000 && currentTime > 1000) {
        setStack("step3");
      } else if (currentTime <= 1000 && currentTime > 0) {
        setStack("step4");
      } else {
        setStack("default");
      }
    } else if (mode === "restMode") {
      setStack("rest");
    }
  }, [currentTime, mode]);

  useEffect(() => {
    if (!currentTime) {
      setCurrentTime(time);
      clearTimer(time);
    }
    if (count !== 2 && !currentTime) {
      setMode("focusMode");
    }
  }, [currentTime]);

  const startClickHandler = () => {
    startTimer(startTime);
    dispatch(__startTimer());
    setTime(0);
    setRestCount(true);
  };

  const quitClickHandler = () => {
    setCount(0);
    clearTimer(startTime);
  };

  const changeRestModeHandler = () => {
    setCurrentTime(restTime);
    setMode("restMode");
  };
  console.log(restCount);

  const startRestHandler = () => {
    if (count === 2) {
      startTimer(longRestTime);
      setCount(0);
      setTime(startTime);
    } else if (count === 1) {
      startTimer(restTime);
      setTime(longRestTime);
      setCount(count + 1);
      setRestCount(!restCount);
    } else if (count === 0) {
      startTimer(restTime);
      setTime(startTime);
      setCount(count + 1);
      setRestCount(!restCount);
    }
  };

  const skipRestClickHandler = () => {
    if (count === 2) {
      clearTimer(time);
    } else {
      clearTimer(time);
      setMode("focusMode");
    }
  };

  const focusMode = {
    start:
      currentTime === 0 || currentTime === restTime ? (
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
        {count === 2 ? "긴 휴식하기" : "휴식하기"}
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

  const perBtnByMode = {
    focusMode: focusMode,
    restMode: restMode,
  };

  return (
    <StContainer>
      <TimerBackground
        parsedTime={parsedTime}
        isClear={isClear}
        perBtnByMode={perBtnByMode}
        mode={mode}
        stack={stack}
      ></TimerBackground>
      {/* <StBackground url={perImageByStack[stack]} delay={perDelayByStack[stack]}>
        <Header justifyContent="right" right={IMAGES.menu}></Header>
        <Timer
          parsedTime={parsedTime}
          isClear={isClear}
          perBtnByMode={perBtnByMode}
          mode={mode}
          perMsgByStack={perMsgByStack}
          stack={stack}
        ></Timer>
      </StBackground> */}
    </StContainer>
  );
};

export default CarrotTimer;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
