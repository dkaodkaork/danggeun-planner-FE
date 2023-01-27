import React, { useState, useEffect, useRef } from "react";
import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";
import { api } from "../core/api";

const Sse = () => {
  // useEffect(() => {
  //   const RefreshToken = localStorage.getItem("refreshToken");
  //   const AccessToken = localStorage.getItem("accessToken");
  //   if (AccessToken) {
  //     const es = new EventSourcePolyfill(
  //       `${process.env.REACT_APP_TEST_SERVER}/api/subscribe`,
  //       {
  //         headers: {
  //           AccessToken: AccessToken,
  //           RefreshToken: RefreshToken,
  //         },
  //       }
  //     );
  //     es.onmessage = (event) => {
  //       console.log("event", event.data);
  //       // console.log("data", data);
  //       // if (!event.data.includes("EventStream Created")) {
  //       //   getAlarmCount().then((data) => {
  //       //     console.log("count", event.data.unreadNotificationCount);
  //       //     setUnreadCount(event.data.unreadNotificationCount);
  //       //   });
  //       // }
  //     };
  //   }
  // });

  // useEffect(() => {
  //   const AccessToken = localStorage.getItem("accessToken");
  //   if (AccessToken) {
  //     const es = new EventSourcePolyfill(api.getSseApi());
  //     es.onmessage = (event) => {
  //       console.log("event", event.data);
  //       // if (!event.data.includes("EventStream Created")) {
  //       //   getAlarmCount().then((data) => {
  //       //     console.log("count", event.data.unreadNotificationCount);
  //       //     setUnreadCount(event.data.unreadNotificationCount);
  //       //   });
  //       // }
  //     };
  //   }
  // });
  const EventSource = EventSourcePolyfill || NativeEventSource;

  const [data, setDate] = useState("hi");

  useEffect(() => {
    const sse = new EventSource(api.getSseApi());

    // function handleStream(e) {
    //   console.log(e);
    //   setDate(e.data);
    // }

    // sse.onopen = (e) => {
    //   console.log("onopen");
    // };

    // sse.onmessage = (e) => {
    //   handleStream(e);
    // };

    // sse.onerror = (e) => {
    //   sse.close();
    // };

    sse.addEventListener("message", async function (e) {
      console.log(e);
      const data = JSON.parse(e.data);
      setDate(data);
      console.log(data);
    });

    sse.addEventListener("close", () => sse.close());

    return () => {
      sse.close();
    };
  });
  console.log(data);
  // useEffect(() => {
  //   const sseTest = async () => {
  //     try {
  //       const eventSource = new EventSource(api.getSseApi());

  //       eventSource.onmessage = async (event) => {
  //         const res = await event.data;
  //         console.log(res);
  //       };

  //       eventSource.onerror = async (event) => {
  //         console.log(event);
  //         // if (!event.error.message.includes("No activity"))
  //         //   eventSource.close();
  //       };
  //     } catch (error) {}

  //     sseTest();
  //   };
  // });
  //   const eventSource = new EventSource(api.getSseApi());

  //   eventSource.onmessage = event => {
  //     const data = JSON.parse(event.data);
  //     console.log(data.message);
  //   };
  //   eventSource.onerror = error => {
  //     eventSource.close();
  //   };

  // })

  // useEffect(() => {
  //   // const RefreshToken = localStorage.getItem("refreshToken");
  //   // const AccessToken = localStorage.getItem("accessToken");

  //   let eventSource;
  //   const fetchSse = async () => {
  //     try {
  //       eventSource = new EventSource(api.getSseApi());
  //       console.log(eventSource.onmessage);
  //       /* EVENTSOURCE ONMESSAGE ---------------------------------------------------- */
  //       eventSource.onmessage = async (event) => {
  //         const res = await event.data;
  //         console.log(event);
  //         // if (!res.includes("EventStream Created.")) setNewAlarms(true); // 헤더 마이페이지 아이콘 상태 변경
  //         // queryClient.invalidateQueries("myprofile"); // 프로필 업데이트
  //         // queryClient.invalidateQueries("alertNoti"); // 알람 리스트 개수 변경
  //         // queryClient.invalidateQueries("alertLists"); // 알림 목록 업데이트
  //       };

  //       /* EVENTSOURCE ONERROR ------------------------------------------------------ */
  //       eventSource.onerror = async (event) => {
  //         console.log(event);
  //         // if (!event.error.message.includes("No activity"))
  //         //   eventSource.close();
  //       };
  //     } catch (error) {}
  //   };
  //   fetchSse();
  //   return () => eventSource.close();
  // });

  // const eventSource = new EventSource(
  //   `${process.env.REACT_APP_TEST_SERVER}/api/subscribe`,
  //   {
  //     headers: {
  //       Authorization: localStorage.getItem("accessToken"),
  //     },
  //     withCredentials: true,
  //   }
  // );

  // eventSource.onmessage = (event) => {
  //   const data = JSON.parse(event.data);
  //   console.log(data.message);
  // };
  // eventSource.onerror = (error) => {
  //   eventSource.close();
  // };

  return <div>{data}</div>;
};

export default Sse;
