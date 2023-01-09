import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import useTimer from "../../hooks/useTimer";
import { IMAGES, PATH } from "../../constants/index";

const Timer = () => {
  //

  // eslint-disable-next-line
  const [time, setTime] = useState(25 * 1000 * 60); // 25분  => 현재 25분으로 고정되어있는상황 이것을 동적으로  버튼 클릭햇을때 time의 상태를 바꿔줘야 함
  const { clearTimer, startTimer, currentTime, isClear, parsedTime } = useTimer(
    () => {
      alert("finish");
    }, // call back
    time
  );

  return (
    <div>
      <Header
        left={IMAGES.home}
        menuName="timer"
        right={IMAGES.menu}
        leftLink={PATH.main}
        rightLink={PATH.mypage}
      ></Header>
      <Header justifyContent="right" right={IMAGES.menu}></Header>

      <StBackground>
        <StTimer>
          {/* <input value={inputValue} onChange={onChange} /> */}
          <div>{parsedTime || "00:00"}</div>
          {isClear ? (
            <button onClick={() => startTimer(time)}>뽀모도로 시작</button>
          ) : (
            <button onClick={clearTimer}>휴식</button>
          )}
        </StTimer>
      </StBackground>
    </div>
  );
};

export default Timer;

const StTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    border: 1px solid black;
    width: 300px;
    height: 50px;
    border-radius: 20px;
    font-size: 1.5rem;
  }

  div {
    border: 1px solid black;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    font-size: 2.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StBackground = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg width='375' height='812' viewBox='0 0 375 812' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='375' height='812' fill='%23F9F3EA'/%3E%3C/svg%3E");
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;

  height: 812px;
`;
