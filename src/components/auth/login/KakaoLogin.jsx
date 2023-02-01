import { useNavigate } from "react-router-dom";
import { api } from "../../../core/api";
import Landing from "./Landing";
import { PATH } from "../../../constants/index";
import { carrotAlert } from "../../element/alert";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const kakao = async () => {
    try {
      const res = await api.postKakaoLoginApi(code);
      const { data, status, headers } = res;
      // console.log(res);

      if (status === 202) {
        localStorage.setItem("accessToken", headers.accesstoken);
        localStorage.setItem("refreshToken", headers.refreshtoken);
        window.dispatchEvent(new Event("storage"));

        if (data.data.isExistUsername) {
          navigate(PATH.timer);
        } else {
          navigate(PATH.username);
        }
      }
      // 여기서 로컬 스토리지에 acc, refresh 저장  저장하고 이제 navigate 로 이동
    } catch (error) {
      carrotAlert("카카오로그인에 실패했습니다!");
      navigate(PATH.intro);
    }
  };
  kakao();

  return <Landing />;
};

export default KakaoLogin;
