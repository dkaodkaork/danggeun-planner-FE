import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // localhost로 실행시 추적 방지
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
      },
    ]);
    setInitialized(true);

    // localhost는 기록하지 않음. 에러생김
    // if (!window.location.href.includes("localhost")) {
    //   ReactGA.initialize([
    //   {
    //     trackingId: process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
    //   },
    // ]);
    // setInitialized(true);
    // }
  }, []);

  // location 변경 감지시 pageview 이벤트 전송
  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send({
        hitType: "pageview",
        path: location.pathname,
        location: location.pathname,
        title: location.pathname,
      });
    }
  }, [initialized, location]);
  // 개발용
  // useEffect(() => {
  //   ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID, {
  //     debug: true,
  //   });
  //   ReactGA.set({ page: location.pathname });
  //   ReactGA.pageview(location.pathname + location.search);
  // }, [location]);
};

export default RouteChangeTracker;
