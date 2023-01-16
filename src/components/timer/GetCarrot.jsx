import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import GetCarrotModal from "./GetCarrotModal";
import Button from "./TimerButton";

const GetCarrot = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={openModalHandler}>당근 수확하기</Button>
      <ModalContainer>
        {isOpen ? (
          <ModalBackdrop>
            <GetCarrotModal onOpenModal={openModalHandler} onClick={onClick} />
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export default GetCarrot;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
  width: 375px;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
