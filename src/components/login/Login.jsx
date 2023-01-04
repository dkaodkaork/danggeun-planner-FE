import React, { useState } from "react";
// import { IMAGES } from "../../constants";
import styled from "styled-components";
import { api } from "../../core/api";
import { useCookies } from "react-cookie";

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
    // setLoginInfo({ ...loginInfo, [name]: value });
    // console.log(loginInfo);
  };
  console.log(loginInfo);
  const submitHandler = async (e) => {
    if (loginInfo.email === "" || loginInfo.password === "") {
      alert("이메일과 비밀번호를 모두 입력해주세요!");
    } else {
      // try{
      //   const {headers,data} = await api.postLoginApi(loginInfo)
      //   console.log(headers)
      //   if(headers.code === 200){
      //     return (
      //     )
      //   }
      // }
    }

    // if (loginInfo.email && loginInfo.password) {
    //   try {
    //     const { headers, data } = await instance.post(`/auth/login`, loginInfo);
    //     if (data.code === 200) {
    //       return (
    //         localStorage.setItem("authorization", headers.authorization),
    //         navigate("/main")
    //       );
    //     }
    //   } catch (error) {
    //     alert(error.response.data.msg);
    //   }
    // } else {
    //   alert("아이디, 비밀번호를 모두 입력해주세요!");
    // }
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
          name="password"
          type="password"
          value={loginInfo.password}
          onChange={changeHandler}
        />
      </StInputForm>
      <button>로그인</button>
    </StContainer>
  );
};

export default Login;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 3rem;
  height: 50rem;
`;

const StInputForm = styled.div`
  display: flex;
  flex-direction: column;
`;
