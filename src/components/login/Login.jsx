import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import { PATH, MSG } from "../../../constants/index";
import { api } from "../../../core/api";

import Header from "../../header/Header";
import SubHeader from "../../header/SubHeader";
import Button from "../../timer/TimerButton";

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
      <Header title="LOGIN" />
      <SubHeader title="이메일로 로그인" />
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
      <StInputBox>
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
      <Button
        onClick={submitHandler}
        disabled={disabled}
        width="319px"
        marginTop="338px"
      >
        로그인
      </Button>
      <Link to={PATH.signup}>
        <StBottomText>회원가입하러 가기</StBottomText>
      </Link>
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

const StBottomText = styled.div`
  width: 319px;
  height: 18px;

  text-align: center;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 130%;

  text-align: center;
  text-decoration-line: underline;

  color: #4a8a51;

  margin-top: 24px;
`;
