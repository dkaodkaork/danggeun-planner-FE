import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = ({
  menuName,
  justifyContent,
  left,
  right,
  leftLink,
  rightLink,
}) => {
  const navigate = useNavigate();
  return (
    <HeaderStyle justifyContent={justifyContent}>
      <Link to={leftLink}>{left}</Link>
      <MenuName>{menuName}</MenuName>
      <Link to={rightLink}>{right}</Link>
    </HeaderStyle>
  );
};

export default Header;

export const HeaderStyle = styled.div`
  height: 54px;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};

  align-items: center;
  background-color: #f9f3ea;
  padding: 0 36px 0 36px;
`;

export const HomeNav = styled.div`
  width: 32px;
`;

export const MenuName = styled.h1`
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 1.6rem;
`;
