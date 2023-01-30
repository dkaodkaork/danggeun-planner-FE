import { Link } from "react-router-dom";
import styled from "styled-components";

//상수
import { IMAGES, PATH } from "../../constants/index";

//컴포넌트
import TimerButton from "../timer/TimerButton";

const Tutorial3 = () => {
  return (
    <StLayout>
      <ImgBackground url={IMAGES.introBack3}>
        <StContentLayout>
          <h1>알아서 기록하는 똑똑한 플래너</h1>
          <p>
            집중한 기록은 저절로 플래너에 채워져요.
            <br /> 다른 일정들과 함께 관리해요!
          </p>
        </StContentLayout>
        <StButtonLayout>
          <Link to={PATH.intro}>
            <TimerButton width="319px">당근플래너 시작하기</TimerButton>
          </Link>
        </StButtonLayout>
      </ImgBackground>
    </StLayout>
  );
};

export default Tutorial3;

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
  background-size: cover;
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
