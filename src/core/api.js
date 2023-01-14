import { instance, baseURL } from "./apiConfig";

export const api = {
  // 회원가입/로그인
  postLoginApi: (loginInfo) => instance.post(`auth/login`, loginInfo),
  postSignUpApi: (signUpInfo) => instance.post(`auth/signup`, signUpInfo),

  // 유저정보
  putNicknameApi: (userInfo) => baseURL.put(`member/username`, userInfo),
  getUserInfoApi: () => baseURL.get(`member/mypage`),
  putProfileImgApi: (formData) => baseURL.put(`member/image`, formData),

  // 캘린더
  getCalendarApi: (todayYear, todayMonth) =>
    instance.get(`/calendar/${todayYear}-${todayMonth}`),

  // 타이머
  postTimerApi: () => baseURL.post(`/timer`),
  putTimerApi: (timerId) => baseURL.put(`/timer/${timerId}`),

  //그룹
  getGroupListApi: () => baseURL.get(`/group`),
  postGroupAddApi: (payload) => baseURL.post(`/group`, payload),

  // 플래너
  getPlannerApi: (username, date) => baseURL.get(`planner/${username}/${date}`),
  postPlanApi: (planInfo) => baseURL.post(`plan`, planInfo),
  putPlanApi: (planId, planInfo) => baseURL.put(`plan/${planId}`, planInfo),
  deletePlanApi: (planId) => baseURL.delete(`plan/${planId}`),
};
