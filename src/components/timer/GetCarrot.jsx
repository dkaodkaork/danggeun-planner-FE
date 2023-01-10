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
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const ModalBtn = styled.button`
//   background-color: #4000c7;
//   border: none;
//   padding: 20px;
//   color: white;
//   border-radius: 30px;
//   cursor: grab;
// `;

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
