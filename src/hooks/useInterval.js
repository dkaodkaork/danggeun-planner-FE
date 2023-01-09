import { useEffect } from "react";

// 타이머를 화면에 표시하기 위해 사용할 hook

const useInterval = (callback, delay, isClear) => {
  useEffect(() => {
    if (!isClear) {
      // 1) isClear가 false일때, delay 마다 callback 함수를 실행하겠다.
      const timerId = setInterval(callback, delay);
      // setInterval 특정 주기로 반복적으로 특정함수를 실행하게 해줌. 반복할 시간을 지정하기 위해 밀리초 단위의 시간을 매개변수로 전달

      return () => clearInterval(timerId);
      // 실행중인 setInterval 을 취소하기위해서 clearInterval을 사용해야한다. 전달하는 id 는 setInterval을 실행할 때 반환된 값
    }
  }, [delay, isClear]);
};
export default useInterval;
