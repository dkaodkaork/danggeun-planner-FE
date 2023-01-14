import axios from "axios";

const serverUrl = process.env.REACT_APP_TEST_SERVER + "/api";

// request.interceptors.request.use(
//   (config) => {
//     // Get token and add it to header "Authorization"
//     const token = authAPI.getaccessToken();
//     if (token) {
//       config.headers.Authorization = token;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );
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
  // const token = getCookies("accessToken");
  // config.headers["accessToken"] = `${token}`;
  return config;
});

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
  async (err) => {
    const {
      config,
      response: { status },
    } = err;
    // console.log(config, status);
    const originalRequest = config;

    if (status === 401 && loop < 1) {
      loop++;
      if (!isRefreshing) {
        isRefreshing = true;
        // console.log("1", loop);

        const refreshToken = await localStorage.getItem("refreshToken");
        // console.log(refreshToken);
        // token refresh 요청
        // const response = await baseURL.post(
        //   `/auth/token`,
        //   {},
        //   { headers: { refreshToken: `${refreshToken}` } }
        // );
        // console.log(response);
        // const { accessToken: newAccessToken, refreshToken: newRefreshToken } = {
        //   response,
        // };
        // await localStorage.multiSet([
        //   ["accessToken", newAccessToken],
        //   ["refreshToken", newRefreshToken],
        // ]);
        // isRefreshing = false;
        // onRrefreshed(newAccessToken);
        // subscribers = [];
      }

      return new Promise((resolve) => {
        subscribeTokenRefresh((token) => {
          originalRequest.headers.accessToken = `${token}`;
          resolve(axios(originalRequest));
        });
      });
    }
    return Promise.reject(err);
  }
);
