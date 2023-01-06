import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isValidEmail, isValidPassword } from "./func";
import { api } from "../../core/api";
import { MSG } from "../../constants/messages";

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
        const { headers, data } = await api.postSignUpApi({
          email: signUpInfo.email,
          password: signUpInfo.password,
        });
        console.log(headers, data, "111");
        if (headers.code === 200) {
          navigate("/login");
        } else {
          alert(data.msg);
        }
      } catch (error) {
        alert("11");
      }
    } else {
      alert(MSG.formInvalidMsg);
    }
  };

  return (
    <StContainer>
      <StInputForm>
        <label>이메일</label>
        <input
          name="email"
          type="text"
          value={signUpInfo.email}
          onChange={changeEmailHandler}
        />
        {emailError && signUpInfo.email !== "" && MSG.emailInvalidMsg}
      </StInputForm>
      <StInputForm>
        <label>비밀번호</label>
        <input
          maxLength="13"
          name="password"
          type="password"
          value={signUpInfo.password}
          onChange={changePwdHandler}
        />
        {pwdError && signUpInfo.password !== "" && MSG.pwdInvalidMsg}
      </StInputForm>
      <StInputForm>
        <label>비밀번호 확인</label>
        <input
          maxLength="13"
          name="checkPassword"
          type="password"
          value={signUpInfo.checkPassword}
          onChange={changecheckPwdHandler}
        />
        {checkPwdError &&
          signUpInfo.checkPassword !== "" &&
          MSG.checkPwdInvalidMsg}
      </StInputForm>
      <button
        disabled={
          signUpInfo.email === "" ||
          signUpInfo.password === "" ||
          signUpInfo.checkPassword === "" ||
          emailError ||
          pwdError ||
          checkPwdError
        }
        onClick={submitHandler}
      >
        회원가입
      </button>
    </StContainer>
  );
};
export default SignUp;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2rem;
  height: 30rem;
  max-width: 600px;
  margin: 50px auto 0;
  background: #fff;
  border: 4px solid #d8d9de;
  border-radius: 10px;

  button {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #fff;
  }
`;

const StInputForm = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 375px;
    height: 30px;
    border-radius: 10px;
  }
`;
