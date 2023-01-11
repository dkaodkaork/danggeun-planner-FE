import React from "react";
import Header from "../header/Header";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";

const GroupDetail = () => {
  return (
    <>
      <Header menuName="Group" right={IMAGES.menu} left={IMAGES.home}></Header>
      <GroupLayout></GroupLayout>
    </>
  );
};

export default GroupDetail;

const GroupLayout = styled.div`
  background-color: #f9f3ea;
  min-height: 722px; //812px에서 헤더 90px을 뺀 값을 줘야 스크롤이 안생김
`;
