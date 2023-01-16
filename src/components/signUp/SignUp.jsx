import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isValidEmail, isValidPassword } from "./func";
import { api } from "../../core/api";
import { MSG } from "../../constants/messages";
import Header from "../header/Header";
import LoginBtnBox from "../login/LoginBtnBox";

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
          navigate("/login");
        } else {
          alert(data.message);
        }
      } catch (error) {
        // alert(error.response.data.message);
      }
    } else {
      alert(MSG.formInvalidMsg);
    }
  };

  return (
    <StContainer>
      <Header menuName="SIGN UP" justifyContent="center"></Header>
      <StInputBox>
        <StTitle>E-mail</StTitle>

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
      <LoginBtnBox
        mainBtnName="가입하기"
        onClick={submitHandler}
        disabled={
          signUpInfo.email === "" ||
          signUpInfo.password === "" ||
          signUpInfo.checkPassword === "" ||
          emailError ||
          pwdError ||
          checkPwdError
        }
        bottomText="이미 아이디가 있으신가요?"
      />
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
  font-size: 12px;
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
  font-size: 12px;
  line-height: 130%;

  text-align: center;

  color: #4a8a51;
`;
