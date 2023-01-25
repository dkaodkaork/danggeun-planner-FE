//리액트 관련
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//컴포넌트
import Menu from "../menu/Menu";


const Header2 = ({
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
  marginLeft,
}) => {
  return (
    <>
      <StHeaderStyle height={height} padding={padding}>
        <StHeaderLayout justifyContent={justifyContent}>
          <Link to={leftLink}>
            <StIcon onClick={onClick}>{left}</StIcon>
          </Link>
          <StMenuName
            fontSize={fontSize}
            fontWeight={fontWeight}
            width={width}
            marginRight={marginRight}
            marginLeft={marginLeft}
            fontFamily={fontFamily}
          >
            {menuName}
          </StMenuName>
          <div onClick={clickMenuHandler} fontFamily={fontFamily}>
            <Link to={rightLink}>
              <StIcon>{right}</StIcon>
            </Link>
          </div>
        </StHeaderLayout>
      </StHeaderStyle>
      <Menu />
    </>
  );
};

export default Header2;

const StHeaderStyle = styled.div`
  height: ${({ height }) => height || "72px"};
  background-color: #f9f3ea;
  padding: ${({ padding }) => padding || "28px 28px 12px 27px"};
`;

const StHeaderLayout = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  align-items: center;
`;

const StIcon = styled.button`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const StMenuName = styled.h1`
  width: ${({ width }) => width};
  margin-right: ${({ marginRight }) => marginRight};
  margin-left: ${({ marginLeft }) => marginLeft};
  text-align: center;
  font-family: ${({ fontFamily }) => fontFamily || "MaplestoryOTFLight"};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  font-size: ${({ fontSize }) => fontSize || "1.4rem"};
  color: #595550;
`;
