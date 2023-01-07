import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookies = (authorization, value, option) => {
  return cookies.set(authorization, value, { ...option });
};

export const getCookies = (authorization) => {
  return cookies.get(authorization);
};

function cookieControler() {
  return null;
}

export default cookieControler;
