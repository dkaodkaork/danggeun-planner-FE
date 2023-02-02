import styled from "styled-components";

const CheckBox = () => {
  return (
    <StLabel className="container">
      <StInput type="checkbox" />
      <StSpan className="checkmark"></StSpan>
    </StLabel>
  );
};

export default CheckBox;

const StLabel = styled.label`
  /* &.container input:checked ~ &.checkmark {
    background-color: #a4a4a4;
  }

  &.container input:checked ~ &.checkmark:after {
    display: block;
  }

  &.container &.checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  } */
`;

const StInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  :checked ~ &.checkmark {
    background-color: blue;
  }
`;

const StSpan = styled.span`
  position: absolute;
  height: 15px;
  width: 15px;
  border: 1px solid #a4a4a4;

  :hover {
    background-color: #ccc;
  }

  :checked {
    background-color: blue;
  }

  /* ::after {
    content: "";
    position: absolute;
    display: none;
  }  */
`;
