import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import { PATH, IMAGES } from "../../constants/index";
import NicknameCard from "./NicknameCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { today } from "./time";
import BottomBtns from "./BottomBtns";
import PlanCard from "./PlanCard";

const Planner = () => {
  const planInfo = useSelector((state) => state.planner.data);

  return (
    <StContainer>
      <Header
        menuName="Planner"
        right={IMAGES.menu}
        left={IMAGES.home}
        leftLink={PATH.timer}
      ></Header>
      <StDiv>
        <NicknameCard></NicknameCard>
        <Link to={PATH.calendar}>{IMAGES.calendarIcon}</Link>
      </StDiv>
      <StDiv>
        <StDateBox>{today()}</StDateBox>
        <StTodayCarrot>
          오늘 수확량 <span>{planInfo.carrot}</span>
        </StTodayCarrot>
      </StDiv>
      <BottomBtns />
      <StBodyDiv>
        <PlanCard color={"#67986C"}></PlanCard>
        <PlanCard color={"#F27808"}></PlanCard>
        <PlanCard color={"#67986C"}></PlanCard>
        <PlanCard color={"#F27808"}></PlanCard>
        <PlanCard color={"#F27808"}></PlanCard>
        <PlanCard color={"#F27808"}></PlanCard>
        <PlanCard color={"#F27808"}></PlanCard>
        <PlanCard color={"#F27808"}></PlanCard>
        <PlanCard color={"#F27808"}></PlanCard>
        <PlanCard color={"#F27808"}></PlanCard>
        <PlanCard color={"#F27808"}></PlanCard>
        <PlanCard color={"#F27808"}></PlanCard>
      </StBodyDiv>
    </StContainer>
  );
};

export default Planner;

const StDiv1 = styled.div`
  background: #fffdfa;
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 10px;
  width: 315px;
  height: 66px;

  /* back2 */

  border: 1px solid #f1e5d2;
  border-radius: 12px;
`;

const StContainer = styled.div`
  background-color: #f9f3ea;
  width: 375px;
  height: 812px;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 32px 0px 29px;
  height: 56px;
`;

const StDateBox = styled.div`
  width: 170px;
  height: 19px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 19px;
  color: #595550;
  word-spacing: 2px;
  letter-spacing: -0.8px;
`;

const StTodayCarrot = styled.div`
  width: 100px;
  height: 17px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 17px;
  color: #595550;
  text-align: right;
  margin-right: 4px;

  span {
    color: #f27808;
    font-weight: 600;
  }
`;

const StBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 500px;
  overflow: scroll;
`;
