import { useEffect, useState } from "react";
import useInterval from "./useCount";
import moment from "moment";

const useTimer = (callback, delay) => {
  const [timer, setTimer] = useState(delay); // 타이머 시간
  const [currentTime, setCurrentTime] = useState(delay); // 남은 타이머 시간
  const [isClear, setIsClear] = useState(true);
  const [parsedTime, setParsedTime] = useState("");

  // console.log(delay);
  // console.log(currentTime);

  useInterval(
    () => {
      setCurrentTime((currentTime) => {
        if (currentTime > 0) {
          return currentTime - 1000;
        }
      });
    },
    1000,
    isClear
  );

  useEffect(() => {
    if (currentTime === 0) {
      callback();
    }
  }, [currentTime, callback]);

  useEffect(() => {
    var formatted = moment.utc(currentTime).format("mm:ss");
    setParsedTime(formatted);
  }, [currentTime]);

  const clearTimer = () => {
    setCurrentTime(timer);
    setIsClear(true);
  };

  const startTimer = (time) => {
    setTimer(time);
    setCurrentTime(time);
    setIsClear(false);
  };

  return {
    setTimer,
    timer,
    clearTimer,
    startTimer,
    currentTime,
    isClear,
    parsedTime,
  };
};
export default useTimer;
