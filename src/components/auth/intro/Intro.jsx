import { Link } from "react-router-dom";
import styled from "styled-components";

import { IMAGES, PATH } from "../../../constants/index";

import Button from "../../timer/TimerButton";
import { KAKAO_AUTH_URL } from "../../../core/index";

const Intro = () => {
  console.log(KAKAO_AUTH_URL);

  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <StContainer>
      <StImg src={IMAGES.logo}></StImg>
      <Link to={PATH.signup}>
        <Button width="319px">회원가입</Button>
      </Link>
      <Link to={PATH.login}>
        <Button
          width="319px"
          backgroundColor="#FFFDFA"
          color="#F27808"
          border="1px solid #F27808"
        >
          로그인
        </Button>
      </Link>
      <Button
        onClick={kakaoLoginHandler}
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
        <StBtnImg src={IMAGES.kakao} alt="카카오 로그인" />
        <StText>카카오 아이디</StText>
        <StP>로 로그인하기</StP>
      </Button>
    </StContainer>
  );
};

export default Intro;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const StImg = styled.img`
  margin: 209px 107px 156px 107px;
`;

const StBtnImg = styled.img`
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
