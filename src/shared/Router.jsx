import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import CalendarPage from "../pages/CalendarPage";
import UsernameFormPage from "../pages/UsernameFormPage";
import MyPage from "../pages/MyPage";
import ProfilePage from "../pages/ProfilePage";
import TimerPage from "../pages/TimerPage";
import GetCarrotPage from "../pages/GetCarrotPage";
import PlannerPage from "../pages/PlannerPage";
import GroupListPage from "../pages/group/GroupListPage";
import GroupAddPage from "../pages/group/GroupAddPage";
import GroupDetailPage from "../pages/group/GroupDetailPage";
import GroupUpdatePage from "../pages/group/GroupUpdatePage";
import GroupInvitePage from "../pages/group/GroupInvitePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<TimerPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/username" element={<UsernameFormPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
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
