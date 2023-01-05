import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isValidEmail, isValidPassword } from ".";
import { api } from "../../core/api";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [pwdCheckError, setPwdCheckError] = useState(false);
  // const [formCheckError, setFormCheckError] = useState(true);

  useEffect(() => {
    console.log("aaaaaa");
    setPwdCheckError(!(signUpInfo.password === signUpInfo.passwordCheck));
    // setFormCheckError()
  }, [signUpInfo.passwordCheck]);

  const changeEmailHandler = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
    if (value === "" || isValidEmail(value)) {
      // input 값이 공백이거나  이메일 형식이 false이면 emailError가 false , input 값이 공백이 아니거나 isvalid
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const changePwdHandler = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });

    if (value === "" || isValidPassword(value)) {
      setPwdError(false);
    } else {
      setPwdError(true);
    }
  };

  const changePwdCheckHandler = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });

    if (value === "") {
      setPwdCheckError(false);
    }
  };

  const submitHandler = async (e) => {
    if (signUpInfo.email && signUpInfo.password && signUpInfo.passwordCheck) {
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
      alert("이메일과, 비밀번호를 모두 입력해주세요!");
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
        {emailError && <span>올바른 이메일 형식으로 작성해주세요.</span>}
      </StInputForm>
      <StInputForm>
        <label>비밀번호</label>
        <input
          maxlength="13"
          name="password"
          type="password"
          value={signUpInfo.password}
          onChange={changePwdHandler}
        />
        {pwdError && (
          <span>
            영문, 숫자, 특수문자가 모두 포함된 8~13자리로 작성해주세요.
          </span>
        )}
      </StInputForm>
      <StInputForm>
        <label>비밀번호 확인</label>
        <input
          maxlength="13"
          name="passwordCheck"
          type="password"
          value={signUpInfo.passwordCheck}
          onChange={changePwdCheckHandler}
        />
        {pwdCheckError && <span>비밀번호가 일치하지 않습니다.</span>}
      </StInputForm>
      <button
        disabled={emailError && pwdError && pwdCheckError}
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
    width: 400px;
    height: 30px;
    border-radius: 10px;
  }
`;
