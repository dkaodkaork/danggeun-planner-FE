import styled from "styled-components";

const InputBox = ({
  margin,
  title,
  name,
  type,
  onChange,
  maxLength,
  placeholder,
  contents,
  totalCount,
  textAlign,
}) => {
  return (
    <StInputBox margin={margin}>
      <StTitle>{title}</StTitle>
      <StInput
        name={name}
        type={type}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      <StLabel textAlign={textAlign}>
        {contents}
        {totalCount}
      </StLabel>
    </StInputBox>
  );
};

export default InputBox;

const StInputBox = styled.div`
  width: 319px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: ${({ margin }) => margin};
`;

const StTitle = styled.label`
  width: 319px;
  height: 16px;
  font-family: "Pretendard-Bold";
  font-size: 1.2rem;
  line-height: 130%;
  text-align: left;
  margin-left: 10px;
  color: #595550;
`;
const StInput = styled.input`
  padding: 19px;
  width: 319px;
  height: 55px;
  font-size: 1.4rem;
  background: #ffffff;
  border: 1px solid #f1e5d2;
  border-radius: 12px;
  ::placeholder {
    font-family: "Pretendard-Regular";
    font-size: 1.4rem;
    line-height: 17px;
    color: #a4a4a4;
  }
`;

const StLabel = styled.label`
  height: 16px;
  width: 310px;
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  line-height: 130%;
  text-align: ${({ textAlign }) => textAlign};
  color: #4a8a51;
`;
