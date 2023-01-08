import { instance, baseURL } from "./apiConfig";

export const api = {
  // 회원가입/로그인
  postLoginApi: (loginInfo) => instance.post(`member/login`, loginInfo),
  postSignUpApi: (signUpInfo) => instance.post(`member/signup`, signUpInfo),
  // 유저정보
  putNicknameApi: (userInfo) => baseURL.put(`member/username`, userInfo),
  getUserInfoApi: () => baseURL.get(`member/mypage`),
  putProfileImgApi: (formData) => baseURL.put(`member/image`, formData),
  // 캘린더
  getCalendarApi: (todayYear, todayMonth) =>
    instance.get(`/calendar/${todayYear}-${todayMonth}`),
};
