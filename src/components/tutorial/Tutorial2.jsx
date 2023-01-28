import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMAGES, PATH } from "../../constants/index";
import TimerButton from "../timer/TimerButton";

const Tutorial2 = () => {
  return (
    <StLayout>
      <ImgBackground url={IMAGES.introBack2}>
        <StContentLayout>
          <h1>수고한 나에게 채찍 대신 당근을</h1>
          <p>
            집중 시작과 함께 당근 씨앗을 심으면
            <br /> 25분 뒤에 귀여운 당근을 수확할 수 있어요.
          </p>
        </StContentLayout>
        <StButtonLayout>
          <TimerButton width="319px">당근플래너 시작하기</TimerButton>
        </StButtonLayout>
      </ImgBackground>
    </StLayout>
  );
};

export default Tutorial2;

const StLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
`;

const ImgBackground = styled.div`
  background-image: url(${(props) => props.url});
  padding: 80px 28px 28px 28px;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StContentLayout = styled.div`
  h1 {
    font-family: "MaplestoryOTFBold";
    font-weight: 700;
    font-size: 2.4rem;
    color: #595550;
  }
  p {
    margin-top: 24px;
    font-family: "Pretendard-Bold";
    font-weight: 700;
    font-size: 1.6rem;
    color: #595550;
    line-height: 160%;
    text-align: center;
  }
`;

const StButtonLayout = styled.div`
  position: fixed;
  bottom: 3.4483vh;
`;
