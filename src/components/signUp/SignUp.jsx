import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { MSG, PATH } from "../../constants/index";
import { api } from "../../core/api";
import { isValidEmail, isValidPassword } from "./func";

import Header from "../header/Header";
import SubHeader from "../header/SubHeader";
import Button from "../timer/TimerButton";
import Label from "../element/Label";
import InputForm from "../element/InputForm";

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
    <StContainer>
      <Header title="SIGNUP" />
      <SubHeader title="회원가입" />
      <InputForm
        text="E-mail"
        name="email"
        type="text"
        value={signUpInfo.email}
        onChange={changeEmailHandler}
        placeholder="이메일 형식"
      />
      <StInputBox>
        <Label text="E-mail" />

        <StInput
          name="email"
          type="text"
          value={signUpInfo.email}
          onChange={changeEmailHandler}
          placeholder="이메일 형식"
        />
        <StLabel>
          {emailError && signUpInfo.email !== "" && MSG.emailInvalidMsg}
        </StLabel>
      </StInputBox>
      <StInputBox marginTop="10px">
        <StTitle>Password</StTitle>

        <StInput
          maxLength="13"
          name="password"
          type="password"
          value={signUpInfo.password}
          onChange={changePwdHandler}
          placeholder="영문, 숫자, 특수문자가 포함된 8~13자리"
        />
        <StLabel>
          {pwdError && signUpInfo.password !== "" && MSG.pwdInvalidMsg}
        </StLabel>
      </StInputBox>
      <StInputBox marginTop="0px" marginBottom="24px">
        <StTitle>Password Check</StTitle>

        <StInput
          maxLength="13"
          name="checkPassword"
          type="password"
          value={signUpInfo.checkPassword}
          onChange={changecheckPwdHandler}
          placeholder="영문, 숫자, 특수문자가 포함된 8~13자리"
        />
        <StLabel>
          {checkPwdError &&
            signUpInfo.checkPassword !== "" &&
            MSG.checkPwdInvalidMsg}
        </StLabel>
      </StInputBox>
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
      >
        가입하기
      </Button>
    </StContainer>
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

const StInputBox = styled.div`
  width: 319px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop || "20px"};
  gap: 10px;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const StTitle = styled.label`
  width: 319px;
  height: 16px;
  margin-left: 10px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 130%;
  text-align: left;

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

const StLabel = styled.label`
  height: 16px;
  width: 310px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 130%;

  text-align: center;

  color: #4a8a51;
`;
