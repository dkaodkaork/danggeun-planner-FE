import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookies = (accessToken, value, option) => {
  return cookies.set(accessToken, value, { ...option });
};

export const getCookies = (accessToken) => {
  return cookies.get(accessToken);
};

export const removeCookies = (accessToken) => {
  return cookies.remove(accessToken);
};

function cookieControler() {
  return null;
}

export default cookieControler;
