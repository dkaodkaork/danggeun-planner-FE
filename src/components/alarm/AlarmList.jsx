import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//리덕스

//상수, api
import { IMAGES, PATH } from "../../constants/index";

//컴포넌트
import SubHeader from "../header/SubHeader";
import MainHeader from "../header/MainHeader";
import ButtonS from "../element/ButtonS";

const AlarmList = () => {
  return (
    <>
      <MainHeader title="Notice" leftSlot={IMAGES.home} leftLink={PATH.timer} />
      <SubHeader title="알림" />
      <StLayout>
        <StListBoxs>
          <StBox>
            <p>
              <strong>당그니즈</strong> 그룹에서 멤버로 초대합니다.
              <br />
              초대에 응하시겠어요?
            </p>
            <StButtonSet>
              <ButtonS>수락</ButtonS>
              <ButtonS>거절</ButtonS>
            </StButtonSet>
          </StBox>
          <StBox>
            <p>
              <strong>당그니즈</strong> 그룹에서 멤버로 초대합니다.
              <br />
              초대에 응하시겠어요?
            </p>
            <StButtonSet>
              <ButtonS>수락</ButtonS>
              <ButtonS>거절</ButtonS>
            </StButtonSet>
          </StBox>
        </StListBoxs>
      </StLayout>
    </>
  );
};

export default AlarmList;

const StLayout = styled.div`
  padding: 12px 28px;
  height: 100%;
`;

const StListBoxs = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StBox = styled.div`
  background: #fffdfa;
  border: 1px solid #f1e5d2;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  p {
    font-family: "Pretendard-Regular";
    font-weight: 500;
    font-size: 1.4rem;
    color: #595550;
    text-align: center;
    line-height: 160%;
  }
  p > strong {
    font-family: "Pretendard-Bold";
    font-weight: 700;
  }
`;

const StButtonSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
