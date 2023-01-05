import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginOption = () => {
  const navigate = useNavigate();

  const clickSignUpHandelr = () => {
    navigate("/signup");
  };
  const clickLoginHandelr = () => {
    navigate("/login");
  };

  return (
    <StContainer>
      <StButton>네이버</StButton>
      <StButton>구글</StButton>
      <StButton>카카오</StButton>
      <StButton onClick={clickSignUpHandelr}>이메일로 시작하기</StButton>
      <StButton onClick={clickLoginHandelr}>로그인 </StButton>
    </StContainer>
  );
};

export default LoginOption;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 50rem;
  border-radius: 20px;
  border: 2px solid black;
`;

const StButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: transparent;
`;
