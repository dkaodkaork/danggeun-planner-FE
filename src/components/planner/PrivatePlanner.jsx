import styled from "styled-components";
import { IMAGES } from "../../constants/index";

const PrivatePlanner = () => {
  return (
    <StContainer>
      <StDiv>
        <StLock>{IMAGES.lock}</StLock>
        <StText>비공개 플래너입니다.</StText>
      </StDiv>
    </StContainer>
  );
};

export default PrivatePlanner;

const StContainer = styled.div`
  background-color: #f9f3ea;
`;

const StDiv = styled.div`
  width: 375px;
  height: 100px;
  bottom: 40%;
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
const StLock = styled.div``;
const StText = styled.div`
  color: #a4a4a4;
  font-size: 1.5rem;
`;
