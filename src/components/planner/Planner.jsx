import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import { PATH, IMAGES } from "../../constants/index";

const Planner = () => {
  return (
    <StContainer>
      <Header
        menuName="Planner"
        right={IMAGES.menu}
        left={IMAGES.home}
        leftLink={PATH.timer}
      ></Header>
      <h1>Planner Page</h1>
    </StContainer>
  );
};

export default Planner;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 812px;
`;
