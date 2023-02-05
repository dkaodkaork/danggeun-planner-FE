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

    if (response?.data?.message === "Access Token이 만료되었습니다") {
      if (!isRefreshing) {
        isRefreshing = true;

        const refreshToken = localStorage.getItem("refreshToken");

        // token refresh 요청
        api.postRefreshApi(refreshToken).then(({ headers }) => {
          const { accesstoken: newAccessToken, refreshtoken: newRefreshToken } =
            headers;

          localStorage.setItem("accessToken", newAccessToken);
          localStorage.setItem("refreshToken", newRefreshToken);
          window.dispatchEvent(new Event("storage"));

          isRefreshing = false;

          onRrefreshed(headers.accesstoken);
        });
      }

      const retryOiginalRequest = new Promise((resolve) => {
        subscribeTokenRefresh((token) => {
          // console.log(token);
          originalRequest.headers.accessToken = `${token}`;
          // console.log(originalRequest.headers.accessToken);
          // resolve(axios(originalRequest));
          resolve(baseURL.request(config));
        });
      });
      return retryOiginalRequest;
    } else if (response?.data?.message === "Refresh Token이 만료되었습니다") {
      localStorage.clear();
      window.dispatchEvent(new Event("storage"));
      window.location.href = "/";
    }

    return Promise.reject(err);
  }
);
