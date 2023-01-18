import React from "react";
import styled from "styled-components";

const ProfileImg = ({ src }) => {
  return (
    <>
      <ImgCircle>
        <Profile src={src} />
      </ImgCircle>
    </>
  );
};

export default ProfileImg;

const ImgCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 70%;
  overflow: hidden;
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
