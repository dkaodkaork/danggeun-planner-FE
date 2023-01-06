import { instance } from "./apiConfig";

export const api = {
  postLoginApi: (loginInfo) => instance.post(`member/login`, loginInfo),
  postSignUpApi: (signUpInfo) => instance.post(`member/signup`, signUpInfo),
};
