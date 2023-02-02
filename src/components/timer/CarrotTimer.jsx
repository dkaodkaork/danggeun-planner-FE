import React, { useLayoutEffect, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __startTimer, __finsihTimer } from "../../redux/modules/timerSlice";
import styled from "styled-components";

import useTimer from "../../hooks/useTimer";
import { timeStamp } from "../planner/time";

import Button from "./TimerButton";
import GetCarrot from "./GetCarrot";
import TimerBackground from "./TimerBackground";
import MainHeader from "../header/MainHeader";
import { __getUserInfo } from "../../redux/modules/mypageSlice";
import { useNavigate } from "react-router-dom";
import { carrotAlert, carrotConfirm } from "../element/alert";
//

const CarrotTimer = () => {
  const [stack, setStack] = useState("");
  const [mode, setMode] = useState("focusMode");
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const data = useSelector((state) => state.timer.data);

  const startTime = 1000 * 60 * 25;
  const restTime = 1000 * 60 * 5;
  const longRestTime = 1000 * 60 * 15;

  const alarm = new Audio(require("../../assets/audio/alarm.mp3"));

  const { isClear, parsedTime, currentTime, timer, toggleTimer, setTimerTime } =
    useTimer(() => {
      callback();
    }, startTime);

  useEffect(() => {
    dispatch(__getUserInfo()).then((res) => {
      if (res?.payload?.username === null) {
        carrotAlert("닉네임은 반드시 생성해야 합니다!");
        navigate("username");
      }
    });
  }, []);

  useLayoutEffect(() => {
    if (mode === "focusMode") {
      if (currentTime === 1500000) {
        setStack("default");
      } else if (currentTime < 1500000 && currentTime > 1200000) {
        setStack("step1");
      } else if (currentTime <= 1200000 && currentTime > 900000) {
        setStack("step2");
      } else if (currentTime <= 900000 && currentTime > 600000) {
        setStack("step3");
      } else if (currentTime <= 600000 && currentTime > 300000) {
        setStack("step4");
      } else if (currentTime <= 300000 && currentTime > 0) {
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
      alarm.play();
      alarm.volume = 1;
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
    if (count === 4) {
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
    carrotConfirm(
      "정말로 그만두시겠습니까?",
      () => toggleTimer(startTime),
      () => setCount(0)
    );
  };

  const getCarrotHandler = () => {
    setTimerTime(restTime);
    setMode("restMode");
  };

  const focusMode = {
    start: currentTime ? (
      <Button onClick={startTimerHandler}>집중 시작하기</Button>
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
        그만두기?
      </Button>
    ),
  };

  const restMode = {
    start:
      currentTime === restTime ? (
        <Button onClick={startTimerHandler}>휴식하기</Button>
      ) : (
        <Button onClick={startTimerHandler}>긴 휴식하기</Button>
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
