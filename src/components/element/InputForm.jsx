import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";

const InputForm = ({ text, name, type, value, onChange, placeholder }) => {
  return (
    <StContainer>
      <Label text={text}></Label>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></Input>
    </StContainer>
  );
};

export default InputForm;

const StContainer = styled.div`
  width: 319px;
  height: 81px;
  gap: 10px;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
`;
