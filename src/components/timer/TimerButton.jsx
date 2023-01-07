import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StButton
      backgroundColor={props.backgroundColor}
      background={props.background}
      color={props.color}
      hoverBacground={props.hoverBacground}
      hoverColor={props.hoverColor}
      type={props.type || "button"}
      onClick={props.onClick}
      fontSize={props.fontSize}
      margin={props.margin}
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
    >
      {props.children}
    </StButton>
  );
};

export default Button;
const StButton = styled.button`
  border-radius: 12px;
  padding: ${({ padding }) => padding || "10px 23px 10px 23px"};
  cursor: pointer;
  //margin: ${({ margin }) => margin || "0 5px 0 0"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#F27808"};
  color: ${({ color }) => color || "#F9F3EA"};
  border: ${({ border }) => border};
  font-size: ${({ fontSize }) => fontSize || "2.0rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  font-family: ${({ fontFamily }) => fontFamily || "MaplestoryOTFBold"};
  width: ${({ width }) => width || "260px"};
  height: ${({ height }) => height || "75px"};
  filter: ${({ filter }) =>
    filter || "drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.25))"};
  /* &:disabled {
    background-color: ${({ backgroundColor }) =>
    backgroundColor || "rgba(88, 132, 224, 0.7)"};
    color: ${({ color }) => color || "#fff"};
  }
  &:active {
    background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--color-point-blue)"};
    color: ${({ color }) => color || "#fff"};
  } */
`;
