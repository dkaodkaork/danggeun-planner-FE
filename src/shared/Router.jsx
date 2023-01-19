import { BrowserRouter, Route, Routes } from "react-router-dom";

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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {/* <PrivateRoute exact path="/" element={<TimerPage />} /> */}
          <Route path="/" element={<TimerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
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
