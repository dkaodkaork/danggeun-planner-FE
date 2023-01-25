import styled from "styled-components";

const Label = ({ text }) => {
  return (
    <>
      <StLabel>{text}</StLabel>
    </>
  );
};

export default Label;

const StLabel = styled.label`
  width: 319px;
  height: 16px;

  /* margin-left: 10px; */

  font-family: "Pretendard-Bold";
  font-size: 1.2rem;

  color: #595550;

  border: 1px solid black;
`;
