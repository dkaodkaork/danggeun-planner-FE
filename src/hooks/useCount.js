import { useEffect } from "react";

const useInterval = (callback, delay, isClear) => {
  useEffect(() => {
    if (!isClear) {
      const tick = () => {
        callback();
      };
      const timerId = setInterval(tick, delay);

      return () => clearInterval(timerId);
    }
  }, [delay, isClear]);
};
export default useInterval;
