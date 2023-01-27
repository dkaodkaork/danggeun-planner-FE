import { instance, baseURL } from "./apiConfig";

export const api = {
  // 회원가입/로그인
  postLoginApi: (loginInfo) => instance.post(`auth/login`, loginInfo),
  postLogoutApi: () => baseURL.post(`auth/logout`),
  postSignUpApi: (signUpInfo) => instance.post(`auth/signup`, signUpInfo),
  postRefreshApi: (refreshToken) =>
    baseURL.post(
      `auth/token`,
      {},
      { headers: { refreshToken: `${refreshToken}` } }
    ),

  // 유저정보
  putUsernameApi: (userInfo) => baseURL.put(`member/username`, userInfo),
  getUserInfoApi: () => baseURL.get(`member/mypage`),
  putProfileImgApi: (formData) => baseURL.put(`member/image`, formData),

  // 캘린더
  getCalendarApi: (todayMonth, todayYear, username) =>
    baseURL.get(`/calendar/${username}/${todayYear}-${todayMonth}`),

  // 타이머
  postTimerApi: (startTime) => baseURL.post(`/timer`, startTime),
  putTimerApi: (timerId, timerInfo) =>
    baseURL.put(`/timer/${timerId}`, timerInfo),
  putTimerContentApi: (timerId, content) =>
    baseURL.put(`timer/${timerId}/content`, content),

  //그룹
  getGroupListApi: () => baseURL.get(`/group`),
  postGroupAddApi: (payload) => baseURL.post(`/group`, payload),
  getGroupDetailApi: (groupId) => baseURL.get(`/group/${groupId}`),
  deleteGroupApi: (groupId) => baseURL.delete(`/group/${groupId}`),
  putGroupUpdateApi: (groupInfo, groupId) =>
    baseURL.put(`/group/${groupId}`, groupInfo),
  //그룹원 조회
  getGroupMemberApi: (payload) => baseURL.get(`/group/${payload}/participant`),
  //그룹 초대 회원 검색
  getGroupMemberInviteApi: (groupId, username) =>
    baseURL.get(`/group/search/${groupId}/${username}`),
  //그룹원 초대
  postGroupMemberInvite: (groupId, inviteList) =>
    baseURL.post(`/group/invitation/${groupId}`, inviteList),
  //그룹 탈퇴
  deleteOutGroupApi: (groupId) =>
    baseURL.delete(`/group/${groupId}/participant`),

  // 플래너
  getAllPlanApi: (username, date) => baseURL.get(`planner/${username}/${date}`),
  getPlanApi: (username, date) =>
    baseURL.get(`planner/${username}/${date}/plan`),
  getFocusPlanApi: (username, date) =>
    baseURL.get(`planner/${username}/${date}/timer`),
  postPlanApi: (planInfo) => baseURL.post(`plan`, planInfo),
  putPlanApi: (planId, planInfo) => baseURL.put(`plan/${planId}`, planInfo),
  deletePlanApi: (planId) => baseURL.delete(`plan/${planId}`),

  //검색
  getSearchUserApi: (username) => baseURL.get(`/member/search/${username}`),

  //sse 구독
  getSseApi: () => baseURL.get(`/subscribe`),
};
