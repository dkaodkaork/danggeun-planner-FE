import { useEffect, useState } from "react";
import useInterval from "./useInterval";
import moment from "moment";

const useTimer = (callback, delay) => {
  const [timer, setTimer] = useState(delay); // 몇분짜리 타이머 시간인지 상태로 저장
  const [currentTime, setCurrentTime] = useState(delay); // 남은 타이머 시간
  const [isClear, setIsClear] = useState(true); //
  const [parsedTime, setParsedTime] = useState(""); // 타이머 시간 파싱 mm:ss

  useInterval(
    // 2) delay마다  실행하는 콜백함수 =>  1초마다 currenttime이 0보다 크면, 즉 설정한 타이머 시간이 존재할때, currenttime값에서 1초씩 뺌//타이머 기능
    () => {
      setCurrentTime((currentTime) => {
        if (currentTime > 0) {
          return currentTime - 1000;
        }
      });
    }, // 콜백함수
    1000, // delay 1초
    isClear //
  );

  useEffect(() => {
    // currenttime이 0이되면 즉 타이머가 (0초) 끝나면, 컴포넌트에서 인자로 받은 콜백함수를 실행 => 즉 타이머가 끝났을때 실행할 로직
    if (currentTime === 0) {
      callback();
      setIsClear(true);
    }
  }, [currentTime]);

  useEffect(() => {
    const formatted = moment.utc(currentTime).format("mm:ss"); // 타이머 시간 파싱 하는것 moment 라이브러리 이용
    setParsedTime(formatted);
  }, [currentTime]);

  const clearTimer = (time) => {
    setCurrentTime(time); // 타이머를멈췄을때 다시 사용자가 지정한 타이머 시간으로 초기화
    setIsClear(true); // setIsClear를 true로 만들어서 useInterval 훅이 실행되지 않음
  };

  const startTimer = (time) => {
    // setTimer(time); // 몇분짜리 타이머인지 update
    setCurrentTime(time); //
    setIsClear(false); // useInterval hook 실행
  };

  return {
    setTimer,
    timer,
    clearTimer,
    startTimer,
    currentTime,
    isClear,
    parsedTime,
    setCurrentTime,
  };
};
export default useTimer;
