import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PATH, MSG } from "../../constants/index";
import { api } from "../../core/api";

import Header from "../header/Header";
import Head from "../header/Head";
import SubHeader from "../header/SubHeader";
import LoginBtnBox from "./LoginBtnBox";

const Login = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setLoginInfo({ ...loginInfo, [name]: value });
        return;
      case "password":
        setLoginInfo({ ...loginInfo, [name]: value });
        return;
      default:
        return;
    }
  };

  const submitHandler = async () => {
    if (loginInfo.email === "" || loginInfo.password === "") {
      alert(MSG.formInvalidMsg);
    } else {
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
        alert(error.response.data.message);
      }
    }
  };

  return (
    <StContainer>
      <Head title="LOGIN" />
      <SubHeader title="이메일로 로그인" />
      {/* <Header
        menuName="LOGIN"
        justifyContent="center"
        padding="35px 78px 19px 78px"
      ></Header> */}
      <StInputBox>
        <StTitle>E-mail</StTitle>
        <StInput
          name="email"
          type="text"
          value={loginInfo.email}
          onChange={changeHandler}
          maxLength="24"
          placeholder="이메일 형식"
        />
      </StInputBox>
      <StInputBox marginBottom="115px">
        <StTitle>Password</StTitle>

        <StInput
          maxLength="13"
          name="password"
          type="password"
          value={loginInfo.password}
          onChange={changeHandler}
          placeholder="영문, 숫자, 특수문자가 포함된 8~13자리"
        />
      </StInputBox>
      <LoginBtnBox
        onClick={submitHandler}
        mainBtnName="로그인"
        bottomText="아이디가 없으신가요?"
        path={PATH.signup}
      />
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

const StInputBox = styled.div`
  width: 319px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const StTitle = styled.label`
  width: 319px;
  height: 16px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 130%;
  text-align: left;
  margin-left: 10px;

  color: #595550;
`;
const StInput = styled.input`
  padding: 19px;
  width: 319px;

  height: 55px;

  background: #ffffff;

  border: 1px solid #f1e5d2;
  border-radius: 12px;

  ::placeholder {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 17px;
    color: #a4a4a4;
  }
`;
