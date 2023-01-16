import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GroupMenu from "../group/GroupMenu";

const Header = ({
  menuName,
  justifyContent,
  left,
  right,
  leftLink,
  clickMenuHandler,
}) => {
  return (
    <>
      <HeaderStyle>
        <TopIcon justifyContent={justifyContent}>
          <Link to={leftLink}>{left}</Link>
          {/* <Link to={rightLink}>{right}</Link> */}
          <MenuName>{menuName}</MenuName>
          <MenuIcon onClick={clickMenuHandler}>{right}</MenuIcon>
        </TopIcon>
      </HeaderStyle>
      <GroupMenu />
    </>
  );
};

export default Header;

export const HeaderStyle = styled.div`
  height: "72px";
  background-color: #f9f3ea;
  padding: 28px 28px 12px 27px;
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
  text-align: center;
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 1.6rem;
  color: #595550;
`;

const MenuIcon = styled.div``;
