import styled from "styled-components";

const AuthHeader = ({ title }) => {
  return (
    <>
      <StContainer>
        <StCenterSlot>{title}</StCenterSlot>
      </StContainer>
    </>
  );
};

export default AuthHeader;

const StContainer = styled.div`
  /* width: 375px; */
  height: 72px;
  padding: 28px 28px 12px 28px;
  background-color: #f9f3ea;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const StCenterSlot = styled.div`
  font-family: "MaplestoryOTFLight";
  font-size: 1.4rem;
  color: #595550;
`;
