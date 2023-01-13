import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import CalendarPage from "../pages/CalendarPage";
import NciknameFormPage from "../pages/NicknameFormPage";
import TermsConditionsPage from "../pages/TermsConditionsPage";
import LoginOptionPage from "../pages/LoginOptionPage";
import MyPage from "../pages/MyPage";
import ProfilePage from "../pages/ProfilePage";
import TimerPage from "../pages/TimerPage";
import GetCarrotPage from "../pages/GetCarrotPage";
import PlannerPage from "../pages/PlannerPage";
import GroupListPage from "../pages/group/GroupListPage";
import GroupAddPage from "../pages/group/GroupAddPage";
import GroupDetailPage from "../pages/group/GroupDetailPage";
import GroupUpdatePage from "../pages/group/GroupUpdatePage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/loginoption" element={<LoginOptionPage />} />
          <Route path="/termsconditions" element={<TermsConditionsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/nickname" element={<NciknameFormPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/planner/:username/:date" element={<PlannerPage />} />
          <Route path="/carrot" element={<GetCarrotPage />} />
          <Route path="/grouplist" element={<GroupListPage />} />
          <Route path="/groupadd" element={<GroupAddPage />} />
          <Route path="/groupdetail" element={<GroupDetailPage />} />
          <Route path="/groupupdate" element={<GroupUpdatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
