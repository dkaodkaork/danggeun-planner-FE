import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginOption from "../components/LoginOption/LoginOption";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import SignUpAgree from "../components/signUpAgree/SignUpAgree";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
