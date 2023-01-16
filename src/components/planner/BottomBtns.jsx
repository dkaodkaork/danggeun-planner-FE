import React from "react";
import { IMAGES } from "../../constants/index";
import styled from "styled-components";

const BottomBtns = () => {
  return (
    <StContainer>
      <StButton>{IMAGES.addBtn}</StButton>
    </StContainer>
  );
};

export default BottomBtns;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StButton = styled.button`
  border-radius: 100%;
  :active {
    position: relative;
    bottom: 0.2rem;
  }
`;
