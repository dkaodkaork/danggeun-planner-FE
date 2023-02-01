import { Link } from "react-router-dom";
import styled from "styled-components";

import { IMAGES, PATH } from "../../../constants/index";

import Button from "../../timer/TimerButton";

const Intro = () => {
  return (
    <StContainer>
      <StBody>
        <StImg>{IMAGES.intro}</StImg>
        <StMsg>{IMAGES.logo}</StMsg>
      </StBody>
      <StBtnBox>
        <Link to={PATH.tutorial}>
          <Button width="319px">튜토리얼</Button>
        </Link>
        <Link to={PATH.login}>
          <Button
            width="319px"
            backgroundColor="#FFFDFA"
            color="#F27808"
            border="1px solid #F27808"
          >
            당근플래너 시작하기
          </Button>
        </Link>
      </StBtnBox>
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
`;

const StBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: fixed;
  top: 26vh;
  z-index: 5;
`;

const StMsg = styled.div``;

const StImg = styled.div``;

const StBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  position: fixed;
  width: 319px;
  bottom: 28px;
`;
