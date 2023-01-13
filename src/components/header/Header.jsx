import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import GroupMenu from "../group/GroupMenu";

const Header = ({
  menuName,
  justifyContent,
  left,
  right,
  leftLink,
  rightLink,
  clickMenuHandler,
}) => {
  return (
    <>
      <HeaderStyle>
        <TopIcon justifyContent={justifyContent}>
          <Link to={leftLink}>{left}</Link>
          {/* <Link to={rightLink}>{right}</Link> */}
          <MenuIcon onClick={clickMenuHandler}>{right}</MenuIcon>
        </TopIcon>
        <MenuName>{menuName}</MenuName>
      </HeaderStyle>
      <GroupMenu />
    </>
  );
};

export default Header;

export const HeaderStyle = styled.div`
  height: 90px;
  /* display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  align-items: center; */
  background-color: #f9f3ea;
  padding: 27px 28px 0 27px;
`;

export const TopIcon = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  align-items: center;
  /* padding: 0 36px 0 36px; */
`;

export const HomeNav = styled.div`
  width: 32px;
`;

export const MenuName = styled.h1`
  margin-top: 10px;
  text-align: center;
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 1.6rem;
  color: #595550;
`;

const MenuIcon = styled.div``;
