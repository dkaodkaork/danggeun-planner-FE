import React from "react";
import { PATH, IMAGES } from "../../constants/index";
import styled from "styled-components";

const BottomBtns = () => {
  return (
    <StContainer>
      {IMAGES.rangeBtn}
      {IMAGES.addBtn}
    </StContainer>
  );
};

export default BottomBtns;

const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 28px;
  width: 100%;

  bottom: 1%;

  /* width: 300px; */
  position: absolute;
`;
