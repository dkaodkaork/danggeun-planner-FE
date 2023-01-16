import React from "react";
import styled from "styled-components";
import { IMAGES } from "../../constants/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NicknameCard = ({ nickname, profileImage, link }) => {
  const userInfo = useSelector((state) => state.mypage.data);

  return (
    <>
      <StContainer to={link}>
        <StImg src={IMAGES.test}></StImg>
        <StNicknameBox>{nickname}</StNicknameBox>
      </StContainer>
    </>
  );
};

export default NicknameCard;

const StContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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
