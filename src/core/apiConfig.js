import axios from "axios";
import { api } from "./api";
import { serverUrl } from ".";

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
  const token = localStorage.getItem("accessToken");
  config.headers["accessToken"] = `${token}`;
  return config;
});

// 다중 요청에 대응할 코드

let isRefreshing = false;
let subscribers = [];

const onRrefreshed = (token) => {
  subscribers.map((cb) => cb(token));
};

const subscribeTokenRefresh = (cb) => {
  subscribers.push(cb);
};

baseURL.interceptors.response.use(
  (res) => res,
  (err) => {
    const { config, response } = err;
    const originalRequest = config;
    console.log(response);
    console.log(response?.data?.message);

    // 401 토큰만료 응답이오면 실행한다
    if (response?.data?.message === "Access Token이 만료되었습니다") {
      if (!isRefreshing) {
        isRefreshing = true;

        // 리프레쉬 토큰을 가져온다
        const refreshToken = localStorage.getItem("refreshToken");

        // token refresh 요청
        api.postRefreshApi(refreshToken).then(({ headers }) => {
          const { accesstoken: newAccessToken, refreshtoken: newRefreshToken } =
            headers;

          localStorage.setItem("accessToken", newAccessToken);
          localStorage.setItem("refreshToken", newRefreshToken);
          window.dispatchEvent(new Event("storage"));

          isRefreshing = false;

          // 콜백함수에 토큰을 넣어서
          onRrefreshed(headers.accesstoken);

          subscribers = [];
        });
      }

      const retryOiginalRequest = new Promise((resolve) => {
        subscribeTokenRefresh((token) => {
          originalRequest.headers.accessToken = `${token}`;
          resolve(baseURL.request(config));
        });
      });
      return retryOiginalRequest;
    } else if (
      response?.data?.message === "Refresh Token이 만료되었습니다" ||
      response?.data?.message === "Refresh Token이 일치하지 않습니다."
    ) {
      localStorage.clear();
      window.dispatchEvent(new Event("storage"));
      window.location.href = "/";
      console.log("로그아웃");
    }

    return Promise.reject(err);
  }
);
