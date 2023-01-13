import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  return (
    <ModalBackdrop>
      <ModalBox>{props.children}</ModalBox>
    </ModalBackdrop>
  );
};

export default Modal;

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  height: 259px;
  width: 328px;
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