import React from "react";
import styled from "styled-components";

const Modal = ({ children, height, width }) => {
  return (
    <ModalBackdrop>
      <ModalBox height={height} width={width}>
        {children}
      </ModalBox>
    </ModalBackdrop>
  );
};

export default Modal;

export const ModalBackdrop = styled.div`
  width: 375px;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

const ModalBox = styled.div`
  height: ${(props) => props.height || "259px"};
  width: ${(props) => props.width || "328px"};
  border-radius: 12px;
  background: #fffdfa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
