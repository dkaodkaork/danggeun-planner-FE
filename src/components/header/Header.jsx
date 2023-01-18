import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GroupMenu from "../group/GroupMenu";
import Menu from "../menu/Menu";

const Header = ({
  menuName,
  justifyContent,
  left,
  right,
  rightLink,
  leftLink,
  clickMenuHandler,
  height,
  onClick,
  padding,
  fontSize,
  fontWeight,
  fontFamily,
  width,
  marginRight,
}) => {
  return (
    <>
      <HeaderStyle height={height} padding={padding}>
        <TopIcon justifyContent={justifyContent}>
          <Link to={leftLink}>
            <button onClick={onClick}>{left}</button>
          </Link>
          {/* <Link to={rightLink}>{right}</Link> */}
          <MenuName
            fontSize={fontSize}
            fontWeight={fontWeight}
            width={width}
            marginRight={marginRight}
            fontFamily={fontFamily}
          >
            {menuName}
          </MenuName>
          <MenuIcon onClick={clickMenuHandler} fontFamily={fontFamily}>
            <Link to={rightLink}>
              <button onClick={onClick}>{right}</button>
            </Link>
          </MenuIcon>
        </TopIcon>
      </HeaderStyle>
      <Menu />
    </>
  );
};

export default Header;

export const HeaderStyle = styled.div`
  height: ${({ height }) => height || "72px"};
  background-color: #f9f3ea;
  padding: ${({ padding }) => padding || "28px 28px 12px 27px"};
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
  width: ${({ width }) => width};
  margin-right: ${({ marginRight }) => marginRight};

  text-align: center;
  font-family: ${({ fontFamily }) => fontFamily || "MaplestoryOTFLight"};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  font-size: ${({ fontSize }) => fontSize || "1.4rem"};
  color: #595550;
`;

const MenuIcon = styled.div``;
