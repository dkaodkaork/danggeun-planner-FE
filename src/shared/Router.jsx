import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";

import LoginPage from "../pages/auth/LoginPage";
//const LoginPage = lazy(() => import("../pages/auth/LoginPage"));

import SignUpPage from "../pages/auth/SignUpPage";
//const SignUpPage = lazy(() => import("../pages/auth/SignUpPage"));

import CalendarPage from "../pages/calendar/CalendarPage";
//const CalendarPage = lazy(() => import("../pages/calendar/CalendarPage"));

import UsernameFormPage from "../pages/auth/UsernameFormPage";
//const UsernameFormPage = lazy(() => import("../pages/auth/UsernameFormPage"));

import MyPage from "../pages/user/MyPage";
//const MyPage = lazy(() => import("../pages/user/MyPage"));

import ProfileEditPage from "../pages/user/ProfileEditPage";
//const ProfileEditPage = lazy(() => import("../pages/user/ProfileEditPage"));

import TimerPage from "../pages/timer/TimerPage";
//const TimerPage = lazy(() => import("../pages/timer/TimerPage"));

import PlannerPage from "../pages/planner/PlannerPage";
//const PlannerPage = lazy(() => import("../pages/planner/PlannerPage"));

import GroupListPage from "../pages/group/GroupListPage";
//const GroupListPage = lazy(() => import("../pages/group/GroupListPage"));

import GroupAddPage from "../pages/group/GroupAddPage";
//const GroupAddPage = lazy(() => import("../pages/group/GroupAddPage"));

import GroupDetailPage from "../pages/group/GroupDetailPage";
//const GroupDetailPage = lazy(() => import("../pages/group/GroupDetailPage"));

import GroupUpdatePage from "../pages/group/GroupUpdatePage";
//const GroupUpdatePage = lazy(() => import("../pages/group/GroupUpdatePage"));

import GroupInvitePage from "../pages/group/GroupInvitePage";
//const GroupInvitePage = lazy(() => import("../pages/group/GroupInvitePage"));

import AlarmPage from "../pages/alarm/AlarmPage";
//const AlarmPage = lazy(() => import("../pages/alarm/AlarmPage"));

import TutorialPage from "../pages/tutorial/TutorialPage";
//const TutorialPage = lazy(() => import("../pages/tutorial/TutorialPage"));

import IntroPage from "../pages/auth/IntroPage";
//const IntroPage = lazy(() => import("../pages/auth/IntroPage"));

import KakaoLoginPage from "../pages/auth/KakaoLoginPage";
//const KakaoLoginPage = lazy(() => import("../pages/auth/KakaoLoginPage"));

//import RouteChangeTracker from "./RouterChangeTracker";
//const RouteChangeTracker = lazy(() => import("./RouterChangeTracker"));

import ErrorPage from "../pages/error/ErrorPage";
//const ErrorPage = lazy(() => import("../pages/error/ErrorPage"));

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
      <Suspense fallback={<div></div>}>
        {/* <RouteChangeTracker /> */}
        <Routes>
          {accessToken ? (
            <Route>
              <Route path="/" element={<TimerPage />} />
              <Route path="/username" element={<UsernameFormPage />} />
              <Route path="/alarm" element={<AlarmPage />} />
              <Route path="/calendar/:username" element={<CalendarPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/profile" element={<ProfileEditPage />} />
              <Route
                path="/planner/:username/:date"
                element={<PlannerPage />}
              />
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
              <Route path="/tutorial" element={<TutorialPage />} />
              <Route path="/" element={<IntroPage />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/kakao/login" element={<KakaoLoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
