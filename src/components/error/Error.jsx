import styled from "styled-components";
import AuthHeader from "../auth/AtuhHeader";
import SubHeader from "../header/SubHeader";
import { IMAGES } from "../../constants/index";
import { useRouteByToken } from "../../hooks/useRouteByToken";

const Error = () => {
  const { routeByToken } = useRouteByToken();

  return (
    <>
      <AuthHeader title="ERROR" />
      <SubHeader leftSlot={IMAGES.previousArrow} onClick={routeByToken} />
      <StContainer>
        <StBody url={IMAGES.errImg} />
        <StText>
          접근 권한이 없거나 <br />
          찾을 수 없는 페이지 입니다.
        </StText>
      </StContainer>
    </>
  );
};

export default Error;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f3ea;
  height: 100%;
`;

const StBody = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  margin: 200px 0px 24px 0px;
  width: 172px;
  height: 210px;
`;

const StText = styled.div`
  width: 375px;
  height: 52px;

  text-align: center;

  font-family: "MaplestoryOTFLIGHT";
  font-size: 1.6rem;
  line-height: 160%;
  color: #595050;
`;
