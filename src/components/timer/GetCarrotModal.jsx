import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import TimerButton from "./TimerButton";

const GetCarrotModal = (props) => {
  return (
    <ModalBox onClick={props.onOpenModal}>
      <CarrotImg>당근이미지</CarrotImg>
      <GetMsg>당근 1개를 수확했습니다!</GetMsg>
      <TimerButton width="108px" height="44px">
        확인
      </TimerButton>
    </ModalBox>
  );
};

export default GetCarrotModal;

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
  gap: 22px;
`;

const CarrotImg = styled.div``;

const GetMsg = styled.div``;
