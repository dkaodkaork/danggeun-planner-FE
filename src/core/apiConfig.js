import axios from "axios";
import { getCookies } from "./cookieControler";

const serverUrl = process.env.REACT_APP_TEST_SERVER + "/api";

// 헤더 없이 사용하는 경우
export const instance = axios.create({
  baseURL: serverUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 토큰 값이 들어가야 하는 경우
export const baseURL = axios.create({
  baseURL: serverUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// interceptors를 통해 토큰값을 보내주는 것에 사용
// 로컬스토리지에 토큰 값 넣기
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("AccessToken");
  config.headers["AccessToken"] = `${token}`;
  // const token = getCookies("AccessToken");
  // config.headers["AccessToken"] = `${token}`;
  return config;
});
