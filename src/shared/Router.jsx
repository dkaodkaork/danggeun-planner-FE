import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginOption from "../components/loginOption/LoginOption";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import SignUpAgree from "../components/signUpAgree/SignUpAgree";
import CalendarPage from "../pages/CalendarPage";
import NciknameFormPage from "../pages/NicknameFormPage";
import TimerPage from "../pages/TimerPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/loginoption" element={<LoginOption />} />
          <Route path="/signupagree" element={<SignUpAgree />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/nickname" element={<NciknameFormPage />} />
          <Route path="/timer" element={<TimerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
