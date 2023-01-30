import { useNavigate } from "react-router-dom";
import { PATH } from "../constants";

export const useRouteByToken = () => {
  const navigate = useNavigate();

  const routeByToken = () => {
    const AccessToken = localStorage.getItem("accessToken");
    console.log(AccessToken);
    AccessToken ? navigate(PATH.timer) : navigate(PATH.intro);
  };

  return { routeByToken };
};
