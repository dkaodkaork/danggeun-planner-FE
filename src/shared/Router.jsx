import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

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
import AlarmPage from "../pages/alarm/AlarmPage";
import TutorialPage from "../pages/tutorial/TutorialPage";
import IntroPage from "../pages/auth/IntroPage";
import KakaoLoginPage from "../pages/auth/KakaoLoginPage";
import RouteChangeTracker from "./RouterChangeTracker";
import ErrorPage from "../pages/error/ErrorPage";
import { useState } from "react";

const Router = () => {
  const item = localStorage.getItem("accessToken");
  const [accessToken, setAccessToken] = useState(item);

  useEffect(() => {
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  async function checkAuth() {
    const item = await localStorage.getItem("accessToken");
    setAccessToken(item);
  }

  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <Routes>
        {accessToken ? (
          <Route>
            <Route path="/" element={<TimerPage />} />
            <Route path="/username" element={<UsernameFormPage />} />
            <Route path="/alarm" element={<AlarmPage />} />
            <Route path="/tutorial" element={<TutorialPage />} />
            <Route path="/calendar/:username" element={<CalendarPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/profile" element={<ProfileEditPage />} />
            <Route path="/planner/:username/:date" element={<PlannerPage />} />
            <Route path="/carrot" element={<GetCarrotPage />} />
            <Route path="/group" element={<GroupListPage />} />
            <Route path="/group/add" element={<GroupAddPage />} />
            <Route path="/group/:groupId" element={<GroupDetailPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route
              path="/group/:groupId/update"
              element={<GroupUpdatePage />}
            />
            <Route
              path="/group/:groupId/invite"
              element={<GroupInvitePage />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        ) : (
          <Route>
            <Route path="/" element={<TutorialPage />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/kakao/login" element={<KakaoLoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
