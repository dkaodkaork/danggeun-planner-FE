import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "../element/Modal";
import ButtonS from "../element/ButtonS";

import { detailMenuOpenStatus } from "../../redux/modules/modalSlice";

const GroupModal = (props) => {
  const dispatch = useDispatch();

  const detailMenuOpen = useSelector(
    (state) => state.modalSlice.detailMenuOpen
  );

  const clickGroupMenuHandler = () => {
    dispatch(detailMenuOpenStatus(!detailMenuOpen));
  };

  return (
    <>
      {detailMenuOpen ? (
        <Modal>
          <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png"></img>
          <GroupName>당그니즈</GroupName>
          <GetMsg>위 그룹을 정말 {props.subject}하시겠습니까?</GetMsg>
          <BtnLayout>
            <ButtonS>네</ButtonS>
            <ButtonS className="reverse" onClick={clickGroupMenuHandler}>
              아니요
            </ButtonS>
          </BtnLayout>
        </Modal>
      ) : null}
    </>
  );
};

export default GroupModal;

const GroupName = styled.p`
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 2.4rem;
  color: #614925;
`;

const GetMsg = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  font-weight: 500;
  color: #403b36;
`;

const BtnLayout = styled.p`
  display: flex;
  gap: 14px;
`;
