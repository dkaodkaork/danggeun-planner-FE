import { instance, baseURL } from "./apiConfig";

export const api = {
  // 회원가입/로그인
  postLoginApi: (loginInfo) => instance.post(`auth/login`, loginInfo),
  postKakaoLoginApi: (code) => instance.get(`auth/kakao?code=${code}`),
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
  putPlannerOpenApi: (isPlannerOpened) =>
    baseURL.put(`member/disclosure`, isPlannerOpened),

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

  //알람
  //알람 수신
  getAlarmApi: () => baseURL.get(`/member/notification/read`),
  //종 누르면 알람 수신 true로 바꾸기
  patchAlarmApi: () => baseURL.patch(`/member/notification/read`),
  //알람 리스트 조회
  getAlarmListApi: () => baseURL.get(`/member/notification`),
  //그룹 초대 승락
  postAlarmAcceptApi: (groupId, notificationId) =>
    baseURL.post(`/member/notification/${groupId}/${notificationId}`),
  //그룹 초대 거절
  deleteAlarmRejectApi: (groupId, notificationId) =>
    baseURL.delete(`/member/notification/${groupId}/${notificationId}`),
  //그룹 초대 결과 확인
  deleteConfirmApi: (notificationId) =>
    baseURL.delete(`/member/notification/${notificationId}`),
};
