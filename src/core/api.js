import { instance, baseURL } from "./apiConfig";

export const api = {
  // 회원가입/로그인
  postLoginApi: (loginInfo) => instance.post(`member/login`, loginInfo),
  postSignUpApi: (signUpInfo) => instance.post(`member/signup`, signUpInfo),
  postNicknameApi: (userInfo) => baseURL.post(`member/username`, userInfo),
  // 캘린더
  getCalendarApi: (todayYear, todayMonth) =>
    instance.get(`/calendar/${todayYear}-${todayMonth}`),

};
