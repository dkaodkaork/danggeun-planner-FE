import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UsernameCard = ({ username, profileImage, link }) => {
  return (
    <>
      <StContainer>
        <StImg src={profileImage}></StImg>
        <StUsernameBox>{username}</StUsernameBox>
      </StContainer>
    </>
  );
};

export default UsernameCard;

const StContainer = styled.div`
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

const StUsernameBox = styled.div`
  font-size: 1.4rem;
  font-family: "Pretendard-Regular";
  line-height: 17px;
`;
