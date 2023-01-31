import React from "react";
import styled from "styled-components";

const GroupDetailBtn = (props) => {
  return (
    <StButton
      className={props.className}
      backgroundColor={props.backgroundColor}
      background={props.background}
      color={props.color}
      hoverBacground={props.hoverBacground}
      hoverColor={props.hoverColor}
      type={props.type || "button"}
      onClick={props.onClick}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      margin={props.margin}
      GroupDetailButton
      marginTop={props.marginTop}
      width={props.width}
      fontFamily={props.fontFamily}
      padding={props.padding}
      height={props.height}
      display={props.display}
      justifyContent={props.justifyContent}
      paddingLeft={props.paddingLeft}
      gap={props.gap}
      filter={props.filter}
      disabled={props.disabled}
      textDecoration={props.textDecoration}
      fontStyle={props.fontStyle}
      animation={props.animation}
      underlinePosition={props.underlinePosition}
    >
      {props.children}
    </StButton>
  );
};

export default GroupDetailBtn;

const StButton = styled.button`
  margin-top: ${({ marginTop }) => marginTop};
  border-radius: 12px;
  padding: ${({ padding }) => padding || "5px 12px"};
  cursor: pointer;
  //margin: ${({ margin }) => margin || "0 5px 0 0"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#F9F3EA"};
  color: ${({ color }) => color || "#595550"};
  border: ${({ border }) => border || "1px solid #A4A4A4;"};
  font-size: ${({ fontSize }) => fontSize || "1.2rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  font-family: ${({ fontFamily }) => fontFamily || "Pretendard-Regular"};
  font-style: ${({ fontStyle }) => fontStyle};
  width: ${({ width }) => width || "69px"};
  height: ${({ height }) => height || "30px"};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-underline-position: ${({ underlinePosition }) => underlinePosition};
  animation: ${({ animation }) => animation};
  box-shadow: ${({ boxShadow }) =>
    boxShadow || "0px 4px 0px rgba(0, 0, 0, 0.15)"};

  filter: ${({ filter }) =>
    filter || "drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.25))"};
  &.reverse {
    width: ${({ width }) => width || "83px"};
    background-color: ${({ backgroundColor }) => backgroundColor || "#F9F3EA"};
    color: ${({ color }) => color || "#F27808"};
    border: ${({ border }) => border || "1px solid #F27808;"};
  }
`;
