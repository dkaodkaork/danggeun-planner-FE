import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Menu } from "../../assets/images/menuicon.svg";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <HomeNav>홈</HomeNav>
      <MenuName>{props.menuName}</MenuName>
      <Menu />
    </HeaderStyle>
  );
};

export default Header;

export const HeaderStyle = styled.div`
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f3ea;
  padding: 0 36px 0 36px;
`;

export const HomeNav = styled.div``;

export const MenuName = styled.h1`
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
`;
