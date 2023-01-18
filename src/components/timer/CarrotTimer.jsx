import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import useTimer from "../../hooks/useTimer";
import Button from "./TimerButton";
import { useDispatch, useSelector } from "react-redux";
import { __startTimer, __finsihTimer } from "../../redux/modules/timerSlice";
import TimerBackground from "./TimerBackground";
import { timeStamp } from "../planner/time";

const CarrotTimer = () => {
  const [stack, setStack] = useState("");
  const [mode, setMode] = useState("focusMode");
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.timer.data);
  // console.log(data);

  const startTime = 1000 * 4;
  const restTime = 1000 * 2;
  const longRestTime = 1000 * 3;

  const { isClear, parsedTime, currentTime, timer, toggleTimer, setTimerTime } =
    useTimer(() => {
      callback();
    }, startTime);

  useLayoutEffect(() => {
    if (mode === "focusMode") {
      if (currentTime <= 4000 && currentTime > 3000) {
        setStack("default");
      } else if (currentTime <= 3000 && currentTime > 2000) {
        setStack("step1");
      } else if (currentTime <= 2000 && currentTime > 1000) {
        setStack("step2");
      } else if (currentTime <= 1000 && currentTime > 0) {
        setStack("step3");
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
    // setCount(count + 1);
    const timerInfo = { endTime: timeStamp(), count: count };

    dispatch(__finsihTimer({ timerId: data.timerId, timerInfo }));
    // console.log(timeStamp());
  };

  const restModeDoneHandler = () => {
    if (count === 3) {
      toggleTimer(longRestTime);
      setCount(1);
    } else {
      toggleTimer(startTime);
      setMode("focusMode");
    }
  };

  const startTimerHandler = () => {
    toggleTimer();
    if (timer === startTime) {
      dispatch(__startTimer({ startTime: timeStamp() }));
      console.log("타이머 시작통신");
      // console.log(timeStamp());
    }
  };

  const focusGiveUpHandler = () => {
    toggleTimer(startTime);
    setCount(1);
  };

  const getCarrotHandler = () => {
    setTimerTime(restTime);
    // setCount(count + 1);
    setMode("restMode");
    // 모달만 다시 해결해보자  모달안에 스타트 타이머 넣어서 적용해보자
  };

  // const 휴식startTimerHandler = () => {
  //   toggleTimer(restTime);
  // };

  const focusMode = {
    start: currentTime ? (
      <Button onClick={startTimerHandler}>집중시작하기</Button>
    ) : (
      <Button onClick={getCarrotHandler}>당근 수확하기</Button>
    ),
    rest: (
      <Button
        onClick={focusGiveUpHandler}
        color="#614925"
        backgroundColor="transparent"
        fontSize="2.2rem"
        textDecoration="underline"
        underlinePosition="under"
        filter="none"
        fontWeight="400"
        fontFamily="MaplestoryOTFLight"
      >
        포기하기
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
        color="#614925"
        backgroundColor="transparent"
        fontSize="2.2rem"
        textDecoration="underline"
        underlinePosition="under"
        filter="none"
        fontWeight="400"
        fontFamily="MaplestoryOTFLight"
      >
        넘어가기
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
  );
};

export default CarrotTimer;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
