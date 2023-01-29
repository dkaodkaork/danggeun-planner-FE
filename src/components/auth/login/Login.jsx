import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import { PATH, MSG } from "../../../constants/index";
import { api } from "../../../core/api";
import { carrotAlert } from "../../element/alert";

import SubHeader from "../../header/SubHeader";
import Button from "../../timer/TimerButton";
import InputBox from "../signUp/InputBox";
import AuthHeader from "../AtuhHeader";

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
        if (data.data.isExistUsername) {
          navigate(PATH.timer);
        } else {
          navigate(PATH.username);
        }
      }
    } catch (error) {
      console.log(error);
      carrotAlert(error.response.data.message);
    }
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
        <Link to={PATH.signup}>
          <StBottomText>회원가입하러 가기</StBottomText>
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

  font-family: "Pretendard-Bold";
  font-size: 1.4rem;
  line-height: 130%;

  text-align: center;
  text-decoration-line: underline;

  color: #4a8a51;
  margin-top: 24px;
`;

const StBotBox = styled.div`
  position: fixed;
  width: 319px;
  height: 117px;
  bottom: 28px;
`;
