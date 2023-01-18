import React from "react";
import styled from "styled-components";
import Button from "../timer/TimerButton";
import { PATH, MSG, IMAGES } from "../../constants/index";
import { Link } from "react-router-dom";

const LoginBtnBox = ({ onClick, disabled, mainBtnName, bottomText, path }) => {
  return (
    <StContainer>
      <Button
        onClick={onClick}
        backgroundColor="#A4A4A4"
        width="319px"
        disabled={disabled}
      >
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
          gap="24px"
          filter="none"
        >
          {IMAGES.kakao} 카카오 아이디로 로그인하기
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
          gap="25px"
          filter="none"
        >
          {IMAGES.naver} 네이버 아이디로 로그인하기
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
          gap="28px"
          filter="none"
        >
          {IMAGES.google} 구글 아이디로 로그인하기
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
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-align: center;
  text-decoration-line: underline;

  /* 1 */

  color: #f27808;

  margin-top: 59px;
`;
