import styled from "styled-components";

const Background = ({ Children }) => {
  return <LayoutBox>{Children}</LayoutBox>;
};

export default Background;

const LayoutBox = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background: #f9f3ea;
`;
