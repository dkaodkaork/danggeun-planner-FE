import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const GetCarrotModal = (props) => {
  return <ModalBox onClick={props.onOpenModal}>모달박스 표시</ModalBox>;
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
`;
