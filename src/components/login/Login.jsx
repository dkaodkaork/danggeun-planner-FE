import React, { useState } from "react";
import styled from "styled-components";
import { api } from "../../core/api";
import { setCookies } from "../../core/cookieControler";
import { MSG } from "../../constants/messages";

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

  const submitHandler = async () => {
    if (loginInfo.email === "" || loginInfo.password === "") {
      alert(MSG.formInvalidMsg);
    } else {
      try {
        const { headers, data } = await api.postLoginApi(loginInfo);

        if (data.message === "로그인 성공") {
          // return localStorage.setItem("AccessToken", headers.accesstoken);
          return setCookies("AccessToken", headers.accesstoken, {
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
          maxLength="13"
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
  max-width: 350px;
  margin: 50px auto 0;
  background: #fff;
  border: 4px solid #d8d9de;
  border-radius: 10px;

  button {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid black;
  }
`;

const StInputForm = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 250px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
  }
`;
