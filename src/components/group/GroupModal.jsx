//리액트 관련
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//상수, api
import { detailMenuOpenStatus } from "../../redux/modules/modalSlice";

//컴포넌트
import Modal from "../element/Modal";
import ButtonS from "../element/ButtonS";

const GroupModal = (props) => {
  const dispatch = useDispatch();

  const detailMenuOpen = useSelector(
    (state) => state.modalSlice.detailMenuOpen
  );

  //그룹 이미지 불러오기
  const groupDetailData = useSelector((state) => state.group.groupDetail);

  const clickGroupMenuHandler = () => {
    dispatch(detailMenuOpenStatus(!detailMenuOpen));
    props.onClickCancle();
  };

  const modalRef = useRef();

  const modalOutSideClick = (e) => {
    if (modalRef.current === e.target) {
      dispatch(detailMenuOpenStatus(!detailMenuOpen));
    }
  };

  return (
    <>
      {detailMenuOpen ? (
        <Modal modalRef={modalRef} modalOutSideClick={modalOutSideClick}>
          <GroupImg src={groupDetailData?.groupImage} />
          <GroupName>{props.groupName}</GroupName>
          <GetMsg>위 그룹을 정말 {props.subject}하시겠습니까?</GetMsg>
          <BtnLayout>
            <ButtonS className="reverse" onClick={clickGroupMenuHandler}>
              아니요
            </ButtonS>
            <ButtonS onClick={props.onClickConfirm}>예</ButtonS>
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

const GroupImg = styled.img`
  width: 67px;
  height: 67px;
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
