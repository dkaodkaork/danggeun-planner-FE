import React from "react";
import styled from "styled-components";
import { IMAGES } from "../../constants/index";
import { useSelector } from "react-redux";

const NicknameCard = () => {
  const userInfo = useSelector((state) => state.mypage.data);

  return (
    <>
      <StContainer>
        <StImg src={IMAGES.test}></StImg>
        <StNicknameBox>여섯글자닉넴</StNicknameBox>
      </StContainer>
    </>
  );
};

export default NicknameCard;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  /* width: 73px;
  height: 17px; */
`;

const StImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 30px;
  height: 30px;
`;

const StNicknameBox = styled.div`
  font-size: 1.4rem;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
`;
