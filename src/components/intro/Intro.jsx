import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "../menu/Menu";
import Slider from "./Slider";
//import Slider from "./Slider2";

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
