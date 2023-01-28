import React, { useState, useRef } from "react";
import styled from "styled-components";

import GetCarrotModal from "./GetCarrotModal";
import Button from "./TimerButton";

const GetCarrot = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const modalRef = useRef();

  const modalOutSideClick = (e) => {
    if (modalRef.current === e.target) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <Button onClick={openModalHandler}>당근 수확하기</Button>
      {isOpen ? (
        <ModalBackdrop ref={modalRef} onClick={modalOutSideClick}>
          <GetCarrotModal onOpenModal={openModalHandler} onClick={onClick} />
        </ModalBackdrop>
      ) : null}
    </>
  );
};

export default GetCarrot;

const ModalBackdrop = styled.div`
  width: 375px;
  height: 100%;
  top: 0px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
