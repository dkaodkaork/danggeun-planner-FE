import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __startTimer, __finsihTimer } from "../../redux/modules/timerSlice";
import styled from "styled-components";

import useTimer from "../../hooks/useTimer";
import { timeStamp } from "../planner/time";

import Button from "./TimerButton";
import GetCarrot from "./GetCarrot";
import TimerBackground from "./TimerBackground";
import MainHeader from "../header/MainHeader";
//

const CarrotTimer = () => {
  const [stack, setStack] = useState("");
  const [mode, setMode] = useState("focusMode");
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.timer.data);

  const startTime = 1000 * 4;
  const restTime = 1000 * 2;
  const longRestTime = 1000 * 3;

  const { isClear, parsedTime, currentTime, timer, toggleTimer, setTimerTime } =
    useTimer(() => {
      callback();
    }, startTime);

  useLayoutEffect(() => {
    if (mode === "focusMode") {
      if (currentTime <= 80000 && currentTime > 70000) {
        setStack("default");
      } else if (currentTime <= 70000 && currentTime > 60000) {
        setStack("step1");
      } else if (currentTime <= 60000 && currentTime > 50000) {
        setStack("step2");
      } else if (currentTime <= 50000 && currentTime > 40000) {
        setStack("step3");
      } else if (currentTime <= 40000 && currentTime > 30000) {
        setStack("step4");
      } else if (currentTime <= 30000 && currentTime > 20000) {
        setStack("step5");
      } else {
        setStack("step6");
      }
    } else if (mode === "restMode") {
      setStack("rest");
    }
  }, [currentTime, mode]);

  const callback = () => {
    if (!currentTime && mode === "focusMode") {
      setCount(count + 1);
      focusModeDoneHandler();
    } else if (!currentTime && mode === "restMode") {
      restModeDoneHandler();
    }
  };

  const focusModeDoneHandler = () => {
    toggleTimer(0);

    const timerInfo = { endTime: timeStamp(), count: count + 1 };

    dispatch(__finsihTimer({ timerId: data.timerId, timerInfo }));
  };

  const restModeDoneHandler = () => {
    if (count === 2) {
      toggleTimer(longRestTime);
      setCount(0);
    } else {
      toggleTimer(startTime);
      setMode("focusMode");
    }
  };

  const startTimerHandler = () => {
    toggleTimer();
    if (timer === startTime && count === 0) {
      dispatch(__startTimer({ startTime: timeStamp() }));
    }
  };

  const focusGiveUpHandler = () => {
    toggleTimer(startTime);
    setCount(0);
  };

  const getCarrotHandler = () => {
    setTimerTime(restTime);
    setMode("restMode");
  };

  const focusMode = {
    start: currentTime ? (
      <Button onClick={startTimerHandler}>집중시작하기</Button>
    ) : (
      <GetCarrot onClick={getCarrotHandler}>당근 수확하기</GetCarrot>
    ),
    rest: (
      <Button
        onClick={focusGiveUpHandler}
        color="#4A8A51"
        backgroundColor="transparent"
        fontSize="1.6rem"
        filter="none"
        fontFamily="MaplestoryOTFLight"
        textDecoration="underline"
        underlinePosition="under"
      >
        포기하기?
      </Button>
    ),
  };

  const restMode = {
    start:
      currentTime === restTime ? (
        <Button onClick={startTimerHandler}>휴식하기</Button>
      ) : (
        <Button onClick={startTimerHandler}>긴휴식하기</Button>
      ),
    rest: (
      <Button
        onClick={restModeDoneHandler}
        color="#4A8A51"
        backgroundColor="transparent"
        fontSize="1.6rem"
        filter="none"
        fontFamily="MaplestoryOTFLight"
        textDecoration="underline"
        underlinePosition="under"
      >
        휴식 건너뛰기
      </Button>
    ),
  };

  const perBtnByMode = {
    focusMode: focusMode,
    restMode: restMode,
  };

  const circumference = 260 * Math.PI;
  const updateDashoffset =
    (currentTime / timer) * circumference - circumference;

  const strokeDashoffset = () => {
    if (!currentTime || currentTime === timer) {
      return 0;
    }
    return updateDashoffset;
  };

  return (
    <>
      <MainHeader title="TIMER" />
      <StContainer>
        <TimerBackground
          parsedTime={parsedTime}
          isClear={isClear}
          perBtnByMode={perBtnByMode}
          mode={mode}
          stack={stack}
          strokeDashoffset={strokeDashoffset}
          circumference={circumference}
        ></TimerBackground>
      </StContainer>
    </>
  );
};

export default CarrotTimer;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
