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

let loop = 0;
let isRefreshing = false;
let subscribers = [];

function subscribeTokenRefresh(cb) {
  subscribers.push(cb);
}

function onRrefreshed(token) {
  subscribers.map((cb) => cb(token));
}

baseURL.interceptors.response.use(
  (res) => res,
  (err) => {
    const {
      config,
      response: { status },
    } = err;
    const originalRequest = config;
    // console.log(config, status);

    if (status === 401 && loop < 1) {
      loop++;
      // console.log(originalRequest.headers);
      if (!isRefreshing) {
        isRefreshing = true;

        const refreshToken = localStorage.getItem("refreshToken");

        // token refresh 요청
        api.postRefreshApi(refreshToken).then(({ headers }) => {
          const { accesstoken: newAccessToken, refreshtoken: newRefreshToken } =
            headers;

          isRefreshing = false;

          onRrefreshed(headers.accesstoken);

          localStorage.setItem("accessToken", newAccessToken);
          localStorage.setItem("refreshToken", newRefreshToken);
          window.dispatchEvent(new Event("storage"));

          subscribers = [];
        });
      }

      return new Promise((resolve) => {
        subscribeTokenRefresh((token) => {
          // console.log(token);
          originalRequest.headers.accessToken = `${token}`;
          // console.log(originalRequest.headers.accessToken);
          resolve(axios(originalRequest));
        });
      });
    }

    return Promise.reject(err);
  }
);
