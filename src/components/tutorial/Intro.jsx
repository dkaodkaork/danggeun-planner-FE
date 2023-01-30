import styled from "styled-components";

import Slider from "./Slider";

const Intro = () => {
  return (
    <StLayout>
      <Slider></Slider>
    </StLayout>
  );
};

export default Intro;

const StLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;
