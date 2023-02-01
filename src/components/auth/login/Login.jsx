import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import { PATH, MSG, IMAGES } from "../../../constants/index";
import { api } from "../../../core/api";
import { carrotAlert } from "../../element/alert";

import SubHeader from "../../header/SubHeader";
import Button from "../../timer/TimerButton";
import InputBox from "../signUp/InputBox";
import AuthHeader from "../AtuhHeader";
import { KAKAO_AUTH_URL } from "../../../core/index";

const Login = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [emailCount, setEmailCount] = useState(0);
  const [pwdCount, setPwdCount] = useState(0);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (emailCount > 0 && pwdCount > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailCount, pwdCount]);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setLoginInfo({ ...loginInfo, [name]: value });
        setEmailCount(e.target.value.length);
        return;
      case "password":
        setLoginInfo({ ...loginInfo, [name]: value });
        setPwdCount(e.target.value.length);
        return;
      default:
        return;
    }
  };

  const submitHandler = async () => {
    try {
      const { headers, data, status } = await api.postLoginApi(loginInfo);

      if (status === 200) {
        localStorage.setItem("accessToken", headers.accesstoken);
        localStorage.setItem("refreshToken", headers.refreshtoken);
        window.dispatchEvent(new Event("storage"));

        if (data.data.isExistUsername) {
          navigate(PATH.timer);
        } else {
          navigate(PATH.username);
        }
      }
    } catch (error) {
      // console.log(error);
      carrotAlert(error.response.data.message);
    }
  };

  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <StContainer>
      <AuthHeader title="LOGIN" />
      <SubHeader title="이메일로 로그인" />

      <InputBox
        margin="12px 0px 12px 0px"
        title="E-mail"
        name="email"
        type="text"
        value={loginInfo.email}
        onChange={changeHandler}
        placeholder="이메일 형식"
      />

      <InputBox
        title="Password"
        name="password"
        type="password"
        value={loginInfo.password}
        onChange={changeHandler}
        placeholder="영문, 숫자, 특수문자가 포함된 8~13자리"
      />

      <StBotBox>
        <Button onClick={submitHandler} disabled={disabled} width="319px">
          로그인
        </Button>
        <Button
          onClick={kakaoLoginHandler}
          height="54px"
          width="319px"
          backgroundColor="#FFE600"
          fontSize="1.4rem"
          color="#595550"
          fontFamily="Pretendard-Regular"
        >
          <StBtnImg src={IMAGES.kakao} alt="카카오 로그인" />
          <StText>카카오 아이디</StText>
          <StP>로 로그인하기</StP>
        </Button>
        <Link to={PATH.signup}>
          <StBottomText>회원가입</StBottomText>
        </Link>
      </StBotBox>
    </StContainer>
  );
};

export default Login;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StBottomText = styled.div`
  width: 319px;
  height: 18px;

  text-align: center;

  font-family: "MaplestoryOTFLIGHT";
  font-size: 1.6rem;
  line-height: 18px;

  text-align: center;
  text-decoration-line: underline;

  color: #4a8a51;
  margin-top: 18px;
`;

const StBotBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 319px;
  /* height: 150px; */
  gap: 24px;
`;

const StBtnImg = styled.img`
  width: 30px;
  height: 30px;
`;

const StText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5rem;
  margin-left: 24px;
`;

const StP = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
`;
