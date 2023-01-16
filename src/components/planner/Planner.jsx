import React, { useState } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import { PATH, IMAGES } from "../../constants/index";
import NicknameCard from "./NicknameCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { today } from "./time";
import BottomBtns from "./BottomBtns";
import PlanCard from "./PlanCard";
import SlideModal from "../element/SlideModal";
import Input from "../element/Input";
import { addPlanModalOpenStatus } from "../../redux/modules/modalSlice";

const Planner = () => {
  const planInfo = useSelector((state) => state?.planner?.data);
  // console.log(planInfo.contents);

  const [countInput, setCountInput] = useState(0);
  const [planTitle, setPlanTitle] = useState("");
  const [startTime, setStartTime] = useState({
    hour: "",
    min: "",
  });
  const [endTime, setEndTime] = useState({
    hour: "",
    min: "",
  });

  const b = [...planInfo.contents];
  const a = b.sort((a, b) => {
    return (
      Number(a.startTime.replace(":", "")) -
      Number(b.startTime.replace(":", ""))
    );
  });
  // console.log("sorted", a);

  const dispatch = useDispatch();

  // const [addPlanModalOpen, setAddPlanModalOpen] = useState(false);
  const addPlanModalOpen = useSelector(
    (state) => state.modalSlice.addPlanModalOpen
  );

  const clickModalHandler = () => {
    dispatch(addPlanModalOpenStatus(!addPlanModalOpen));
    console.log("1");
    setEndTime({
      hour: "",
      min: "",
    });
    setStartTime({
      hour: "",
      min: "",
    });
  };

  const changeTitleHandler = (e) => {
    console.log(e.target.value);
    setPlanTitle(e.target.value);
    setCountInput(e.target.value.length);
  };

  const changeStartTimeHandler = (e) => {
    setStartTime({ ...startTime, [e.target.name]: e.target.value });
  };

  const changeEndTimeHandler = (e) => {
    setEndTime({ ...endTime, [e.target.name]: e.target.value });
  };

  // 숫자만 입력되도록 하는 함수, input type number 일때 maxLength 안먹힘
  const isNumber = (e) => {
    if (e.target.value.length > e.target.maxLength)
      e.target.value = e.target.value.slice(0, e.target.maxLength);
  };

  return (
    <>
      <StContainer>
        <Header
          menuName="Planner"
          right={IMAGES.menu}
          left={IMAGES.home}
          leftLink={PATH.timer}
        ></Header>
        <StDiv>
          <NicknameCard
            link={PATH.profile}
            nickname={planInfo.username}
            profileImage={planInfo.porfileImage}
          ></NicknameCard>
          <Link to={PATH.calendar}>{IMAGES.calendarIcon}</Link>
        </StDiv>
        <StDiv>
          <StDateBox>{today()}</StDateBox>
          <StTodayCarrot>
            오늘 수확량 <span>{planInfo.carrot}</span>
          </StTodayCarrot>
        </StDiv>
        <StBodyDiv>
          {a.map((val) => {
            let color = "";
            if (Object.keys(val)[0] === "timerId") {
              color = "#F27808";
            } else {
              color = "#67986C";
            }
            return (
              <div key={val.startTime}>
                <PlanCard
                  color={color}
                  content={val.content}
                  startTime={val.startTime}
                  endTime={val.endTime}
                  count={val?.count}
                ></PlanCard>
              </div>
            );
          })}
        </StBodyDiv>
        <BottomBtns onClick={clickModalHandler} />
      </StContainer>
      <SlideModal height="258px" bottom="-260px" toggle={addPlanModalOpen}>
        <StModalHeader>
          <StDateBox>{today()}</StDateBox>
          <button onClick={clickModalHandler}>{IMAGES.checkBtn}</button>
        </StModalHeader>
        <StInputBox>
          <StInput
            placeholder="제목 입력"
            onChange={changeTitleHandler}
            maxLength="24"
          ></StInput>
          <StLabel>{countInput}/24</StLabel>
        </StInputBox>
        <StTimeBox>
          <StSpan>시작</StSpan>
          <Input
            onChange={changeStartTimeHandler}
            type="number"
            name="hour"
            value={startTime.hour}
            onInput={isNumber}
            placeholder="00"
            maxLength="2"
            width="45px"
            height="45px"
            fontSize="1.4rem"
            padding="12px"
          ></Input>
          <div>:</div>
          <Input
            onChange={changeStartTimeHandler}
            onInput={isNumber}
            name="min"
            value={startTime.min}
            type="number"
            placeholder="00"
            maxLength="2"
            width="45px"
            height="45px"
            fontSize="1.4rem"
            padding="12px"
          ></Input>
          <p>-</p>
          <StSpan>종료</StSpan>
          <Input
            onChange={changeEndTimeHandler}
            type="number"
            name="hour"
            defaultValue={endTime.hour}
            onInput={isNumber}
            placeholder="00"
            maxLength="2"
            width="45px"
            height="45px"
            fontSize="1.4rem"
            padding="12px"
          ></Input>
          <div>:</div>
          <Input
            onChange={changeEndTimeHandler}
            type="number"
            name="min"
            defaultValue={endTime.min}
            onInput={isNumber}
            placeholder="00"
            maxLength="2"
            width="45px"
            height="45px"
            fontSize="1.4rem"
            padding="12px"
          ></Input>
        </StTimeBox>
      </SlideModal>
    </>
  );
};

export default Planner;

const StContainer = styled.div`
  background-color: #f9f3ea;
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
  height: 550px;
  overflow: scroll;
  margin-bottom: 15px;
`;

const StModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 319px;
  height: 19px;
  div {
    margin-left: 87px;
  }
`;

const StInputBox = styled.div`
  width: 319px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* align-items: flex-start; */
`;

const StInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 19px;
  gap: 10px;
  width: 319px;

  height: 55px;
  margin-top: 25px;

  background: #ffffff;
  /* back2 */

  border: 1px solid #f1e5d2;
  border-radius: 12px;

  ::placeholder {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 17px;
    color: #a4a4a4;
  }
`;

const StLabel = styled.label`
  height: 16px;
  width: 310px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;

  text-align: right;

  color: #4a8a51;
`;

const StTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  /* gap: 31px; */

  width: 319px;
  height: 41px;
  margin-top: 24px;

  p {
    margin: 0px 19px 0px 19px;
  }

  div {
    margin: 0px 4px 0px 4px;
  }
`;

const StSpan = styled.span`
  width: 28px;
  height: 19px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-decoration-line: underline;

  /* word */

  color: #595550;
  margin-right: 12px;
`;
