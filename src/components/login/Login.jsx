import React, { useState } from "react";
import styled from "styled-components";
import { api } from "../../core/api";
import { setCookies } from "../../core/cookieControler";

const Login = () => {
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

  const submitHandler = async (e) => {
    if (loginInfo.email === "" || loginInfo.password === "") {
      alert("이메일과 비밀번호를 모두 입력해주세요!");
    } else {
      try {
        const { headers, data } = await api.postLoginApi(loginInfo);
        console.log(headers, data);
        if (headers.code === 200) {
          // return localStorage.setItem("authorization", headers.authorization);
          return setCookies("authorization", headers.authorization, {
            path: "/",
            maxAge: 36000,
          });
        }
      } catch (error) {
        alert(error.response.data.msg);
      }
    }
  };

  return (
    <StContainer>
      <StInputForm>
        <label>이메일</label>
        <input
          name="email"
          type="text"
          value={loginInfo.email}
          onChange={changeHandler}
        />
      </StInputForm>
      <StInputForm>
        <label>비밀번호</label>
        <input
          maxlength="13"
          name="password"
          type="password"
          value={loginInfo.password}
          onChange={changeHandler}
        />
      </StInputForm>
      <button onClick={submitHandler}>로그인</button>
    </StContainer>
  );
};

export default Login;

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
