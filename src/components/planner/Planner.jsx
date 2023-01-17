import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import { PATH, IMAGES } from "../../constants/index";
import UsernameCard from "./UsernameCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { today, planStartTime } from "./time";
import BottomBtns from "./BottomBtns";
import PlanCard from "./PlanCard";
import SlideModal from "../element/SlideModal";
import { addPlanModalOpenStatus } from "../../redux/modules/modalSlice";
import {
  __getAllPlan,
  __getTimerPlan,
  __getPlan,
  __postPlan,
  __deletePlan,
  __putPlan,
} from "../../redux/modules/plannerSlice";
import PlannerModal from "./\bPlannerModal";
import Button from "../timer/TimerButton";

const Planner = () => {
  // hook
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const plans = useSelector((state) => state?.planner?.data);

  console.log(plans.isOwner);

  // 상태 선언
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

  //
  const planInfo = {
    startTime: planStartTime(startTime),
    endTime: planStartTime(endTime),
    content: planTitle,
  };
  // console.log(planInfo);

  // const decodeUri = decodeURI(History.location);
  // console.log(History.location?.search);

  useEffect(() => {
    dispatch(__getAllPlan({ username: param.username, date: param.date }));
  }, [dispatch]);

  // // sort 하는 함수
  // const a = () => {
  //   if (plans.contents.length !== 0) {
  //     const temp = [...plans?.contents];
  //     return temp;
  //   }
  // };
  // 처음에 빈배열이 들어와서 오류가 뜸..

  // const temp = ["1"];
  const temp = [...plans?.contents];

  const sortedPlans = temp?.sort((a, b) => {
    return (
      Number(a.startTime.replace(":", "")) -
      Number(b.startTime.replace(":", ""))
    );
  });

  // 모달은 나주에 slice에서 빼고 하면 코드 많이 줄일 수 있을 것 같음. 상태로 관리
  // const [addPlanModalOpen, setAddPlanModalOpen] = useState(false);
  const addPlanModalOpen = useSelector(
    (state) => state.modalSlice.addPlanModalOpen
  );

  const openModalHanlder = () => {
    dispatch(addPlanModalOpenStatus(!addPlanModalOpen));
  };

  const closeModalHandler = () => {
    if (
      !planTitle ||
      !startTime.hour ||
      !startTime.min ||
      !endTime.hour ||
      !endTime.min
    ) {
      alert("제목과 시간을 모두 입력해주세요!");
    } else {
      if (
        startTime.hour > 24 ||
        startTime.hour < 0 ||
        startTime.min > 60 ||
        startTime.min < 0 ||
        endTime.hour > 24 ||
        endTime.hour < 0 ||
        endTime.min > 60 ||
        endTime.min < 0
      ) {
        alert("올바른 시간을 입력해주세요!");
      } else {
        dispatch(addPlanModalOpenStatus(!addPlanModalOpen));
        dispatch(__postPlan(planInfo));
      }
    }
    setPlanTitle("");
    setEndTime({
      hour: "",
      min: "",
    });
    setStartTime({
      hour: "",
      min: "",
    });
  };
  //

  // 플랜 제목
  const changeTitleHandler = (e) => {
    setPlanTitle(e.target.value);
    setCountInput(e.target.value.length);
  };

  // 플랜 시작시간 종료시간
  const changeStartTimeHandler = (e) => {
    setStartTime({ ...startTime, [e.target.name]: e.target.value });
  };

  const changeEndTimeHandler = (e) => {
    setEndTime({ ...endTime, [e.target.name]: e.target.value });
  };

  const submitPlanInfoHandler = () => {
    // dispatch(__postPlan())
  };

  // 플랜 등록

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
        />
        <StDiv>
          <UsernameCard
            link={PATH.profile}
            username={plans.username}
            profileImage={plans.profileImage}
          />
          <Link to={PATH.calendar}>{IMAGES.calendarIcon}</Link>
        </StDiv>
        <StDiv>
          <StDateBox>{today()}</StDateBox>
          <StTodayCarrot>
            오늘 수확량 <span>{plans.carrot}</span>
          </StTodayCarrot>
        </StDiv>
        <StBodyDiv>
          <StBtnBox>
            <Button
              width="45px"
              height="29px"
              backgroundColor="#F9F3EA"
              color="#595550"
              fontSize="1.2rem"
              children="전체"
              fontFamily="Pretendard"
              padding="0px"
              border=" 1px solid #595550"
            />
            <Button
              width="45px"
              height="29px"
              backgroundColor="#F9F3EA"
              color="#4A8A51"
              fontSize="1.2rem"
              children="계획"
              fontFamily="Pretendard"
              padding="0px"
              border=" 1px solid #4A8A51"
            />
            <Button
              width="45px"
              height="29px"
              backgroundColor="#F9F3EA"
              color="#F27808"
              fontSize="1.2rem"
              children="집중"
              fontFamily="Pretendard"
              padding="0px"
              border="1px solid #F27808"
            />
          </StBtnBox>
          {sortedPlans.map((val) => {
            let color = "";
            if (Object.keys(val)[0] === "timerId") {
              color = "#F27808";
            } else {
              color = "#67986C";
            }
            return (
              <div key={val.startTime}>
                <PlanCard
                  onClick={plans.isOwner ? openModalHanlder : () => {}}
                  color={color}
                  content={val.content}
                  startTime={val.startTime}
                  endTime={val.endTime}
                  count={val?.count}
                />
              </div>
            );
          })}
        </StBodyDiv>
        {plans.isOwner && <BottomBtns onClick={openModalHanlder} />}
      </StContainer>
      <SlideModal height="258px" bottom="-260px" toggle={addPlanModalOpen}>
        <PlannerModal
          openModalHanlder={openModalHanlder}
          closeModalHandler={closeModalHandler}
          changeTitleHandler={changeTitleHandler}
          changeStartTimeHandler={changeStartTimeHandler}
          changeEndTimeHandler={changeEndTimeHandler}
          planTitle={planTitle}
          countInput={countInput}
          startTime={startTime}
          endTime={endTime}
          isNumber={isNumber}
        />
      </SlideModal>
    </>
  );
};

export default Planner;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 812px;
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

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 32px 0px 29px;
  height: 56px;
`;

const StBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 550px;
  overflow: scroll;
  margin: 6px 0px 15px 0px;
`;

const StBtnBox = styled.div`
  width: 327px;
  gap: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 14px;
`;
