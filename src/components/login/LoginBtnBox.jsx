import React from "react";
import styled from "styled-components";
import Button from "../timer/TimerButton";
import { PATH, MSG, IMAGES } from "../../constants/index";
import { Link } from "react-router-dom";

const LoginBtnBox = ({ onClick, disabled, mainBtnName, bottomText, path }) => {
  return (
    <StContainer>
      <Button onClick={onClick} width="319px" disabled={disabled}>
        {mainBtnName}
      </Button>
      <StOauthBtns>
        <Button
          height="54px"
          width="319px"
          backgroundColor="#FFE600"
          fontSize="1.4rem"
          color="#595550"
          fontFamily="Pretendard"
          fontStyle="normal"
          fontWeight="700"
          filter="none"
        >
          <StImg src={IMAGES.kakao} alt="카카오 로그인" />
          <StText>카카오 아이디</StText>
          <StP>로 로그인하기</StP>
        </Button>
        <Button
          height="54px"
          width="319px"
          backgroundColor="#00C300"
          fontSize="1.4rem"
          fontFamily="Pretendard"
          fontStyle="normal"
          fontWeight="700"
          color="#FFFDFA"
          filter="none"
        >
          <StImg src={IMAGES.naver} alt="네이버 로그인" />
          <StText>네이버 아이디</StText>
          <StP>로 로그인하기</StP>
        </Button>
        <Button
          height="54px"
          width="319px"
          backgroundColor="#FFFDFA"
          fontSize="1.4rem"
          fontFamily="Pretendard"
          fontStyle="normal"
          fontWeight="700"
          color="#595550"
          filter="none"
        >
          <StImg src={IMAGES.google} alt="구글 로그인" />
          <StText>구글 아이디</StText>
          <StP>로 로그인하기</StP>
        </Button>
      </StOauthBtns>
      <Link to={path}>
        <StBottomText>{bottomText}</StBottomText>
      </Link>
    </StContainer>
  );
};

export default LoginBtnBox;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StOauthBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
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

  color: #f27808;

  margin-top: 39px;
`;

const StImg = styled.img`
  width: 30px;
  height: 30px;
`;

const StText = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5rem;
  margin-left: 24px;
`;

const StP = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
`;
