import React from "react";
import styled from "styled-components";

const Textarea = (props) => {
  return (
    <StTextarea
      backgroundColor={props.backgroundColor}
      background={props.background}
      color={props.color}
      hoverBacground={props.hoverBacground}
      hoverColor={props.hoverColor}
      type={props.type || "textarea"}
      onClick={props.onClick}
      fontSize={props.fontSize}
      margin={props.margin}
      width={props.width}
      fontFamily={props.fontFamily}
      padding={props.padding}
      height={props.height}
      onChange={props.onChange}
      maxLength={props.maxLength}
      contentEditable={props.contentEditable}
      placeholder={props.placeholder}
    >
      {props.children}
    </StTextarea>
  );
};

export default Textarea;
const StTextarea = styled.textarea`
  border-radius: 12px;
  padding: ${({ padding }) => padding || "9px 16px 9px 16px"};
  //cursor: pointer;
  margin: ${({ margin }) => margin || "8px 0px 8px 0px"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#FFFDFA"};
  color: ${({ color }) => color || "#525355"};
  border: ${({ border }) => border || "1px solid #dcdcdc"};
  font-size: ${({ fontSize }) => fontSize || "1.6rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  line-height: ${({ lineHeight }) => lineHeight || "160%"};
  font-family: ${({ fontFamily }) => fontFamily || "Pretendard-Regular"};
  width: ${({ width }) => width || "319px"};
  height: ${({ height }) => height || "100px"};
  border: ${({ border }) => border || "1px solid #F1E5D2"};
  color: ${({ color }) => color || "#595550"};
  maxlength: ${({ maxLength }) => maxLength || "100"};
`;
