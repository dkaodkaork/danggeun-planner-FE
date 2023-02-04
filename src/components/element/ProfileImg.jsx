import React from "react";
import styled from "styled-components";

const ProfileImg = ({ src, width, height, alt }) => {
  return (
    <>
      <ImgCircle width={width} height={height}>
        <Profile src={src} alt={alt} />
      </ImgCircle>
    </>
  );
};

export default ProfileImg;

const ImgCircle = styled.div`
  width: ${(props) => props.width || "30px"};
  height: ${(props) => props.width || "30px"};
  border-radius: 70%;
  overflow: hidden;
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
