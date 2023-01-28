import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";

//리덕스
import { alarmReadStatus } from "../redux/modules/alarmSlice";

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
import TutorialPage from "../pages/tutorial/TutorialPage";
import IntroPage from "../pages/auth/IntroPage";
import KakaoLoginPage from "../pages/auth/KakaoLoginPage";

const Router = () => {
  // const dispatch = useDispatch();

  // //SSE 설정
  // const EventSource = EventSourcePolyfill || NativeEventSource;

  // //읽음 설정 관련
  // const alarmRead = useSelector((state) => state.alarm.alarmRead);

  // console.log("라우터", alarmRead);

  // useEffect(() => {
  //   const fetchSse = async () => {
  //     try {
  //       const eventSource = new EventSource(
  //         `${process.env.REACT_APP_TEST_SERVER}/api/subscribe`,
  //         {
  //           headers: {
  //             AccessToken: localStorage.getItem("accessToken"),
  //           },
  //           withCredentials: true, //무조건 넣어야 함
  //           heartbeatTimeout: 3600000, //리프레시토큰만큼의 기한
  //         }
  //       );
  //       /* EVENTSOURCE ONMESSAGE ---------------------------------------------------- */
  //       eventSource.onmessage = async (e) => {
  //         console.log(e.data);
  //         const res = await e.data;
  //         if (!res.includes("EventStream Created.")) {
  //           dispatch(alarmReadStatus(!alarmRead));
  //         } // 헤더 마이페이지 아이콘 상태 변경
  //         // queryClient.invalidateQueries("myprofile"); // 프로필 업데이트
  //         // queryClient.invalidateQueries("alertNoti"); // 알람 리스트 개수 변경
  //         // queryClient.invalidateQueries("alertLists"); // 알림 목록 업데이트
  //       };

  //       /* EVENTSOURCE ONERROR ------------------------------------------------------ */
  //       eventSource.onerror = async (event) => {
  //         console.log(event);
  //         //eventSource.close();
  //         // if (!event.error.message.includes("No activity"))
  //         //   eventSource.close();
  //       };
  //     } catch (error) {}
  //   };
  //   fetchSse();
  //   // return () => eventSource.close();
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {/* <PrivateRoute exact path="/" element={<TimerPage />} /> */}
          <Route path="/" element={<IntroPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/kakao/login" element={<KakaoLoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/alarm" element={<AlarmPage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
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
