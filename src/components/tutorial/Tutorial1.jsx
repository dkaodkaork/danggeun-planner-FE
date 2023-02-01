import { Link } from "react-router-dom";
import styled from "styled-components";

//상수
import { IMAGES, PATH } from "../../constants/index";

//컴포넌트
import TimerButton from "../timer/TimerButton";

const Tutorial1 = () => {
  return (
    <StLayout>
      <ImgBackground url={IMAGES.introBack1}>
        <StContentLayout>
          <h1>가장 쉽게 집중하는 비결은?</h1>
          <p>
            세계적인 기업에서도 사용하는
            <br /> 효과적인 시간 관리법 <strong>‘뽀모도로 기법’</strong>
          </p>
        </StContentLayout>
        <StBubbleImg src={IMAGES.introContent1} />
        <StDescription>
          4회 반복 후 긴 휴식 <br />
          <strong>= 뽀모도로</strong>
        </StDescription>
        <StButtonLayout>
          <Link to={PATH.intro}>
            <TimerButton width="319px">당근플래너 시작하기</TimerButton>
          </Link>
        </StButtonLayout>
      </ImgBackground>
    </StLayout>
  );
};

export default Tutorial1;

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
  height: 100%;
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
    font-family: "Pretendard-Regular";
    font-weight: 500;
    font-size: 1.6rem;
    color: #595550;
    line-height: 160%;
    text-align: center;
  }
  strong {
    margin-top: 24px;
    font-family: "Pretendard-Bold";
    font-weight: 700;
    font-size: 1.6rem;
    color: #595550;
    line-height: 160%;
    text-align: center;
  }
`;

const StBubbleImg = styled.img`
  margin-top: 12.4384vh;
  width: 272px;
`;

const StDescription = styled.p`
  margin-top: 4.5567vh;
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 1.6rem;
  color: #595550;
  text-align: center;
  line-height: 220%;
  strong {
    color: #f27808;
    font-size: 2.4rem;
  }
`;

const StButtonLayout = styled.div`
  position: fixed;
  bottom: 3.4483vh;
`;
