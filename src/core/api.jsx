import { instance } from "./apiConfig";

// 예시
export const api = {
  // signup: (payload) => baseURL.post(WEBSERVICES.signup, payload),
  // member
  postLoginApi: (loginInfo) => instance.post(`member/login`, loginInfo),
};
