import React from "react";
import styled from "styled-components";

import { IMAGES } from "../../constants/index";

const BottomBtn = ({ onClick }) => {
  return (
    <StContainer>
      <StButton onClick={onClick}>{IMAGES.addBtn}</StButton>
    </StContainer>
  );
};

export default BottomBtn;

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
