import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import useTimer from "../../hooks/useTimer";
import { IMAGES } from "../../constants/index";
import Button from "./TimerButton";
import GetCarrot from "./GetCarrot";

const Timer = () => {
  const [stack, setStack] = useState("");
  const [mode, setMode] = useState(1);
  const [count, setCount] = useState(0);

  // eslint-disable-next-line
  const [time, setTime] = useState(0.25 * 1000 * 60);
  const { clearTimer, startTimer, isClear, parsedTime, currentTime } = useTimer(
    () => {
      console.log("종료");
    }, // call back
    time
  );

  const startClickHandler = () => {
    setTime(0.25 * 1000 * 60);
    setCount(count + 1);
    startTimer(0.25 * 1000 * 60);
  };

  const changeRestModeHandler = () => {
    // 모달의 확인 버튼을 눌렀을때
    setTime(0.1 * 1000 * 60); // 휴식할 타이머의 시간으로 넘겨주자
    clearTimer(0.1 * 1000 * 60);
    setMode(2); // 휴식 모드로 바꿔주자
  };

  useEffect(() => {
    if (mode === 1) {
      if (currentTime <= 15000 && currentTime > 10000) {
        setStack("lv1");
      } else if (currentTime <= 10000 && currentTime > 5000) {
        setStack("lv2");
      } else {
        setStack("lv3");
      }
    } else if (mode === 2) {
      setStack("lv0");
    }
  }, [currentTime, mode]);

  const quitClickHandler = () => {
    if (mode === 1) {
      setCount(0);
      clearTimer(0.25 * 1000 * 60);
    }
  };

  const skipRestClickHandler = () => {
    clearTimer(0);
  };

  const startRestHandler = () => {
    if (currentTime === 0) {
      if (count === 2) {
        setTime(0.15 * 1000 * 60);
        startTimer(0.15 * 1000 * 60);
        setCount(0);
      } else {
        setMode(1);
        setTime(0.25 * 1000 * 60);
        startTimer(0.25 * 1000 * 60);
        setCount(count + 1);
      }
    } else {
      startTimer(time);
    }
  };

  const mode1 = {
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

  const mode2 = {
    start: (
      <Button onClick={startRestHandler}>
        {currentTime === 0
          ? count === 2
            ? "긴휴식하기"
            : "집중하기"
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
    lv0: IMAGES.carrotLv0.default,
    lv1: IMAGES.carrotLv1.default,
    lv2: IMAGES.carrotLv2.default,
    lv3: IMAGES.carrotLv3.default,
  };

  const perMsgByStack = {
    lv0: "휴식은 아주 중요해!",
    lv1: "오늘도 달려볼까요?",
    lv2: "잘하고 있어요!",
    lv3: "할 수 있어요!",
  };

  const perBtnByMode = {
    1: mode1,
    2: mode2,
  };

  return (
    <div>
      <StBackground url={perImageByStack[stack]}>
        <Header justifyContent="right" right={IMAGES.menu}></Header>

        <StTimerContainer>
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
  margin: 90px 58px 33px 57px;
  border-radius: 50%;
  font-size: 7rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffdfa;
  color: #595550;
`;

const StMsg = styled.p`
  margin-top: 226px;
  font-size: 1.6rem;
  font-family: "Pretendard";
  font-style: normal;

  font-weight: 500;
  color: #403b36;
`;

const StBackground = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  height: 812px;
  /* background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='383' height='820' fill='none'%3E%3Cg clip-path='url(%23a)' filter='url(%23b)'%3E%3Cpath fill='%23fff' d='M4 0h375v812H4z'/%3E%3Cpath fill='%23F9F3EA' d='M4 0h375v812H4z'/%3E%3Cg filter='url(%23c)'%3E%3Cpath fill='%23C0D0AC' d='m78 621 14-1 17-2c8 0 16-1 23-3 8-2 14-6 15-11s-2-9-5-13c-13-19-24-39-34-59l-13-23-17-17-21-20-11-10-16-11-10-11c-4-3-10-6-16-6-10 0-16 7-19 13-8 12-16 24-19 38l-2 12c-3 16-5 32-4 47 0 11 2 21 4 32l3 15c1 7 1 16 8 22 5 4 14 4 21 5 28 3 55 4 82 3Z'/%3E%3Cpath fill='%23C0D0AC' d='M-4 501a48 48 0 1 0 0-97 48 48 0 0 0 0 97ZM86 557a35 35 0 1 0 0-71 35 35 0 0 0 0 71Z'/%3E%3Cpath fill='%23C0D0AC' d='M121 578a23 23 0 1 0 0-47 23 23 0 0 0 0 47Z'/%3E%3Cpath fill='%23C0D0AC' d='M145 656a46 46 0 1 0 0-92 46 46 0 0 0 0 92Z'/%3E%3Cpath fill='%23C0D0AC' d='M199 659a27 27 0 1 0 0-55 27 27 0 0 0 0 55ZM52 492a20 20 0 1 0 0-40 20 20 0 0 0 0 40Z'/%3E%3Cpath fill='%23C0D0AC' d='M79 500a14 14 0 1 0 0-28 14 14 0 0 0 0 28ZM364 564a23 23 0 1 0 0-46 23 23 0 0 0 0 46Z'/%3E%3Cpath fill='%23C0D0AC' d='M369 527a13 13 0 1 0 0-26 13 13 0 0 0 0 26Z'/%3E%3Cpath fill='%23C0D0AC' d='M382 514a21 21 0 1 0 0-41 21 21 0 0 0 0 41ZM312 660a37 37 0 1 0 0-74 37 37 0 0 0 0 74Z'/%3E%3Cpath fill='%23C0D0AC' d='m375 634-14-1-17-2c-8 0-16-1-23-3-8-2-14-6-15-11s2-9 5-13c13-20 24-39 34-59l13-23 17-17 21-20 11-10 16-11 10-11c4-3 10-6 16-6 10 0 16 7 19 13 8 12 16 24 19 37l2 13c3 16 5 32 4 47 0 11-2 21-4 31l-3 16c-1 7-1 16-8 22-4 4-14 4-21 5-28 3-55 4-82 3Z'/%3E%3Cpath fill='%23C0D0AC' d='M332 608a32 32 0 1 0 0-63 32 32 0 0 0 0 63Z'/%3E%3Cpath fill='%2367986C' d='m390 722-16-1-20-1-28-4c-9-3-16-8-17-14-1-5 2-10 6-15 15-23 28-46 40-69 5-9 9-19 16-28l19-19 24-24 14-11 19-14 11-12c5-4 12-8 20-8 11 1 18 9 22 15 9 15 18 29 22 45l3 14c3 19 6 38 5 56l-5 37-4 19c-1 7-1 18-9 25-6 5-16 6-25 7-33 3-65 4-97 2Z'/%3E%3Cpath fill='%2367986C' d='M380 647a42 42 0 1 0 0-83 42 42 0 0 0 0 83Z'/%3E%3Cpath fill='%2367986C' d='M339 672a28 28 0 1 0 0-55 28 28 0 0 0 0 55Z'/%3E%3Cpath fill='%2367986C' d='M333 722a33 33 0 1 0 0-67 33 33 0 0 0 0 67ZM389 580a17 17 0 1 0 0-33 17 17 0 0 0 0 33ZM67 619a27 27 0 1 0 0-54 27 27 0 0 0 0 54Z'/%3E%3Cpath fill='%2367986C' d='M61 576a15 15 0 1 0 0-30 15 15 0 0 0 0 30Z'/%3E%3Cpath fill='%2367986C' d='M46 561a24 24 0 1 0 0-49 24 24 0 0 0 0 49Z'/%3E%3Cpath fill='%2367986C' d='M7 539a26 26 0 1 0 0-51 26 26 0 0 0 0 51ZM135 688a17 17 0 1 0 0-33 17 17 0 0 0 0 33Z'/%3E%3Cpath fill='%2367986C' d='m54 702 16-2 20-1 28-4c9-3 16-7 17-13s-2-11-6-16c-15-22-28-45-40-69-5-9-9-18-16-27-5-7-12-14-19-20l-24-23-14-12-19-14-11-12c-5-4-12-7-20-7-11 0-18 8-22 15-9 14-18 29-22 44l-3 15c-3 18-6 37-5 56l5 36 4 19c1 7 1 19 9 25 6 5 16 6 25 7 33 4 65 4 97 3Z'/%3E%3Cpath fill='%2367986C' d='M105 672a37 37 0 1 0 0-75 37 37 0 0 0 0 75Z'/%3E%3C/g%3E%3Cpath fill='%23F1E2CC' d='M384 656v-24c0-2 0-5-2-7-3-6-12-6-18-3l-2 2c-5 3-9 7-15 9-8 3-17 0-25 0s-16 2-23 1c-8 0-15-5-23-6-10-2-21 0-31-1-11-1-22-6-32-4-12 2-21 13-32 13s-20-10-31-11c-16-3-31 10-47 10-10-1-19-6-28-10-9-3-20-3-27 4-7 8-13 13-24 13-9 0-19 0-24 8l-2 6v200h386V656Z'/%3E%3Cpath fill='%23F8A1A6' d='m104 755-3-1c-3-1-5-4-8-2l-6 3-7-1c-2-2-3-5-3-9l-1-8c0-2 0-4 2-6h2l3 1c1 0 2 2 1 3v5a24 24 0 0 0 0 7c0 1 2 2 4 1l3-2h6c1 1 4 5 6 5l3-1c2 1 1 3 0 4l-2 1Z'/%3E%3Cpath fill='%23F8C5BA' d='m81 741 2-1h1l1 1v5h-1a30 30 0 0 1-5 0h-2v-1l-1-4h5Z'/%3E%3Cpath fill='%23595550' d='M82 735h-1v1h1v-1ZM78 735h1v1h-1v-1Z'/%3E%3C/g%3E%3Cpath fill='%23B78B58' d='m189 623 8 5c2 2 4 5 5 9 3 7 2 15 1 24v3l-3 1-2-3h-6l-3 4-1-1-2-6c-4-4-6-8-8-13v-10a37 37 0 0 1 3-13l4-1 4 1Z'/%3E%3Cpath fill='%23B78B58' d='M203 643h2c0-1 2-2 2 0-1 2-4 4-3 7M185 657c-2 0-2 2-3 2h-1v-6M177 621l1-3 1-1 1-1h3l2 1c1 2 1 7-1 8h-4c-2-1-3-2-3-4Z'/%3E%3Cpath stroke='%23D5BB96' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='2' d='m182 625-1 7c0 8 1 16 6 22l2 3 3 4M185 623c8 4 15 14 17 23 0 5-1 10-3 14M184 624c2 8 8 16 10 25l1 11'/%3E%3Cpath fill='%23614925' d='m187 643 1 1v1h-1l-1-2h1ZM198 640h-2v2l2-1v-1Z'/%3E%3Cpath fill='%23FAEDE1' d='M193 643h2v3l-4 1-2-2 1-1h1l2-1Z'/%3E%3Cpath fill='%23F1E2CC' d='m276 652-7 4c-4 2-9 0-13 0l-11 1c-4 0-7-2-11-3l-16-1c-5 0-10-3-15-2-6 2-10 7-16 7s-10-5-15-6c-8-1-15 6-23 5-5 0-9-3-14-4-5-2-10-2-13 2-4 3-7 5-12 6-5 0-10 0-12 3-3 4 0 9 4 13 3 3 7 5 9 9s2 8 5 11c1 2 4 3 6 4 10 5 14 16 24 22l13 5 21 5 14 2c15 0 28-9 43-10l7-2 6-4 8-5 6-7 14-23 6-7c3-6 3-14 3-21l-1-4c-2-3-6-2-9-1l-1 1Z'/%3E%3Cpath fill='%23D5BB96' d='M239 649h-14c-5 0-9-3-14-2s-9 6-15 6c-5 0-9-4-14-5-7-1-13 5-20 5l-13-5h-10l4 3 6 3 9 5c7 1 16-5 23-2l7 3c5 2 10 0 15-2 4-1 9-4 14-4 6 0 12 2 17 1l5-3 4-2-4-1Z'/%3E%3Cpath fill='%23E7D4B8' d='m59 678 6-2 3 1 3 2c2 1 3 2 5 1h5c5 2 3 7-1 8l-10 3c-6 2-12 2-16-4-3-4 0-8 5-9ZM306 658h2l1-2h4l8-2c3 0 12 5 6 11-3 4-9 4-12 4l-11-2c-2-1-6-1-4-6 1-3 4-2 6-3ZM302 690h2v5l-1 2h-13c-2 1-6 3-6-2 1-6 15-6 18-5ZM256 701l-1 3-1 1h-2c-4 0-5-1-3-4 2-2 5-4 7 0ZM104 659v2c-5 4-13 1-11-5 1-3 3-4 5-4 4-1 6 4 6 7ZM120 682l6-2c2-1 5 0 7 2 2 0 3 2 4 3 6 1 16-2 23-5h6l17 5c6 0 12-4 18-9 0 3-1 6-3 8-4 8-11 12-18 9l-15-6c-5-1-9 2-14 4-5 3-10 5-14 4-3 0-5-2-7-3-5-3-16 2-21 0-3-3 8-8 11-10ZM255 669l-3 1-16-2-7 2-4 3h9l15 3 13-4c3-1 6-2 10-1l11 4c3-1 1-2-2-4s-8-6-12-7c-7-3-9 3-14 5Z'/%3E%3Cdefs%3E%3Cfilter id='b' width='383' height='820' x='0' y='0' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_259_1470'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_259_1470' result='shape'/%3E%3C/filter%3E%3Cfilter id='c' width='626' height='329.3' x='-91' y='399' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur result='effect1_foregroundBlur_259_1470' stdDeviation='2.5'/%3E%3C/filter%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M4 0h375v812H4z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"); */
`;
