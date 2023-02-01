export const PATH = {
  //route 경로

  intro: "/intro",
  login: "/login",
  signup: "/signup",
  loginoption: "/loginoption",
  termsconditions: "/termsconditions",
  username: "/username",
  mypage: "/mypage",
  profile: "/profile",
  timer: "/",
  getcarrot: "/getcarrot",
  carrot: "/carrot",
  alarm: "/alarm",
  error: "/error",
  tutorial: "/tutorial",

  //캘린더
  calendar: (username) => `/calendar/${username}`,

  //그룹 페이지
  grouplist: "/group",
  groupadd: "/group/add",
  groupdetail: (groupId) => `/group/${groupId}`,
  groupupdate: (groupId) => `/group/${groupId}/update`,
  groupinvite: (groupId) => `/group/${groupId}/invite`,

  //플래너
  planner: (username, date) => `/planner/${username}/${date}`,
};
