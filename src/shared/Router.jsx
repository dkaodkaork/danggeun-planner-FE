import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";

import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import CalendarPage from "../pages/calendar/CalendarPage";
import UsernameFormPage from "../pages/auth/UsernameFormPage";
import MyPage from "../pages/user/MyPage";
import ProfileEditPage from "../pages/user/ProfileEditPage";
import TimerPage from "../pages/timer/TimerPage";
import GetCarrotPage from "../pages/timer/GetCarrotPage";
import PlannerPage from "../pages/planner/PlannerPage";
import GroupListPage from "../pages/group/GroupListPage";
import GroupAddPage from "../pages/group/GroupAddPage";
import GroupDetailPage from "../pages/group/GroupDetailPage";
import GroupUpdatePage from "../pages/group/GroupUpdatePage";
import GroupInvitePage from "../pages/group/GroupInvitePage";
import PrivateRoute from "./PrivateRoute";
import AlarmPage from "../pages/alarm/AlarmPage";
import { api } from "../core/api";
import Sse from "./Sse";
import IntroPage from "../pages/intro/IntroPage";
import IntroPage2 from "../pages/auth/IntroPage";
import KakaoLoginPage from "../pages/auth/KakaoLoginPage";


const Router = () => {
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
  // const EventSource = EventSourcePolyfill || NativeEventSource;

  // const [data, setDate] = useState();

  // useEffect(() => {
  //   const sse = new EventSource(api.getSseApi());

  //   function handleStream(e) {
  //     console.log(e);
  //     setDate(e.data);
  //   }

  //   sse.onmessage = (e) => {
  //     handleStream(e);
  //   };

  //   sse.onerror = (e) => {
  //     sse.close();
  //   };

  //   return () => {
  //     sse.close();
  //   };
  // });
  // console.log(data);
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

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {/* <PrivateRoute exact path="/" element={<TimerPage />} /> */}
          <Route path="/sse" element={<Sse />} />
          <Route path="/" element={<IntroPage2 />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/kakao/login" element={<KakaoLoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/alarm" element={<AlarmPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/calendar/:username" element={<CalendarPage />} />
          <Route path="/username" element={<UsernameFormPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/profile" element={<ProfileEditPage />} />
          <Route path="/planner/:username/:date" element={<PlannerPage />} />
          <Route path="/carrot" element={<GetCarrotPage />} />
          <Route path="/group" element={<GroupListPage />} />
          <Route path="/group/add" element={<GroupAddPage />} />
          <Route path="/group/:groupId" element={<GroupDetailPage />} />
          <Route path="/group/:groupId/update" element={<GroupUpdatePage />} />
          <Route path="/group/:groupId/invite" element={<GroupInvitePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
