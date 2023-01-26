import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { MSG, PATH } from "../../../constants/index";
import { api } from "../../../core/api";
import { isValidEmail, isValidPassword } from "../func";

import Header from "../../header/Header";
import SubHeader from "../../header/SubHeader";
import Button from "../../timer/TimerButton";
import InputBox from "./InputBox";

const SignUp = () => {
  const navigate = useNavigate();

  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [checkPwdError, setCheckPwdError] = useState(false);

  useEffect(() => {
    setCheckPwdError(!(signUpInfo.password === signUpInfo.checkPassword));
  }, [signUpInfo.password, signUpInfo.checkPassword, signUpInfo.email]);

  const changeEmailHandler = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
    if (isValidEmail(value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const changePwdHandler = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
    if (isValidPassword(value)) {
      setPwdError(false);
    } else {
      setPwdError(true);
    }
  };

  const changecheckPwdHandler = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const submitHandler = async (e) => {
    if (signUpInfo.email && signUpInfo.password && signUpInfo.checkPassword) {
      try {
        const { data, status } = await api.postSignUpApi({
          email: signUpInfo.email,
          password: signUpInfo.password,
        });

        if (status === 201) {
          navigate(PATH.login);
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      alert(MSG.formInvalidMsg);
    }
  };

  return (
    <>
      <StContainer>
        <Header title="SIGNUP" />
        <SubHeader title="회원가입" />
        <InputBox
          margin="12px 0px 12px 0px"
          title="E-mail"
          name="email"
          type="text"
          value={signUpInfo.email}
          onChange={changeEmailHandler}
          placeholder="이메일 형식"
          contents={
            emailError && signUpInfo.email !== "" && MSG.emailInvalidMsg
          }
          textAlign="center"
        />
        <InputBox
          margin="0px 0px 12px 0px"
          title="Password"
          name="password"
          type="password"
          value={signUpInfo.password}
          onChange={changePwdHandler}
          placeholder="영문, 숫자, 특수문자가 포함된 8~13자리"
          contents={pwdError && signUpInfo.password !== "" && MSG.pwdInvalidMsg}
          textAlign="center"
        />

        <InputBox
          title="Password Check"
          name="checkPassword"
          type="password"
          value={signUpInfo.checkPassword}
          onChange={changecheckPwdHandler}
          placeholder="영문, 숫자, 특수문자가 포함된 8~13자리"
          contents={
            checkPwdError &&
            signUpInfo.checkPassword !== "" &&
            MSG.checkPwdInvalidMsg
          }
          textAlign="center"
        />
        <Button
          onClick={submitHandler}
          disabled={
            signUpInfo.email === "" ||
            signUpInfo.password === "" ||
            signUpInfo.checkPassword === "" ||
            emailError ||
            pwdError ||
            checkPwdError
          }
          width="319px"
          marginTop="180px"
        >
          가입하기
        </Button>
        <Link to={PATH.login}>
          <StBottomText>로그인하러 가기</StBottomText>
        </Link>
      </StContainer>
    </>
  );
};
export default SignUp;

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
