import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import { PATH, IMAGES } from "../../constants/index";
import UsernameCard from "./UsernameCard";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { planStartTime, getDayOfWeek } from "./time";
import BottomBtns from "./BottomBtns";
import PlanCard from "./PlanCard";
import SlideModal from "../element/SlideModal";
import { planModalOpenStatus } from "../../redux/modules/modalSlice";
import {
  __getAllPlan,
  __getTimerPlan,
  __getPlan,
  __postPlan,
  __deletePlan,
  __putPlan,
  __putTimerContent,
  __getFocusPlan,
} from "../../redux/modules/plannerSlice";
import PlannerModal from "./PlannerModal";
import SortingBtnGroup from "./SortingBtnGroup";
import { v4 as uuidv4 } from "uuid";
//
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

const Planner = () => {
  // hook
  const dispatch = useDispatch();
  const { date, username } = useParams();

  const plans = useSelector((state) => state?.planner?.data);
  // console.log(plans.error);

  // 상태 선언
  const [selectedId, setSelectedId] = useState(null);
  const [countInput, setCountInput] = useState(0);
  const [planTitle, setPlanTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [startTime, setStartTime] = useState({
    hour: "",
    min: "",
  });
  const [endTime, setEndTime] = useState({
    hour: "",
    min: "",
  });
  const [plan, setPlan] = useState();

  // 메뉴 오픈 관련 추후에 반드시 빼야함
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  //

  // onchange로 받은 값 시작시간 끝나는 시간 파싱해서 보낼것
  const planInfo = {
    startTime: planStartTime(startTime),
    endTime: planStartTime(endTime),
    content: planTitle,
  };

  // console.log(planInfo);
  // 플래너 조회 요청
  useEffect(() => {
    dispatch(__getAllPlan({ username: username, date: date }));
  }, [dispatch]);

  // 전체 조회 버튼
  const onClickGetAllPlan = () => {
    dispatch(__getAllPlan({ username: username, date: date }));
  };

  // 계획 조회 버튼
  const onClickgetPlan = () => {
    dispatch(__getPlan({ username: username, date: date }));
  };

  // 집중 조회 버튼
  const onClickgetFocusPlan = () => {
    dispatch(__getFocusPlan({ username: username, date: date }));
  };

  // 시작시간기준으로 정렬하기
  const temp = [...plans?.contents];
  const sortedPlans = temp?.sort((a, b) => {
    return (
      Number(a.startTime.replace(":", "")) -
      Number(b.startTime.replace(":", ""))
    );
  });
  // console.log(temp);
  // console.log(sortedPlans);

  // 모달은 나주에 slice에서 빼고 하면 코드 많이 줄일 수 있을 것 같음. 상태로 관리
  const planModalOpen = useSelector(
    (state) => state.modalSlice.addPlanModalOpen
  );

  // 모달창 열기
  const openModalHanlder = () => {
    // 모달 열때 안에 내용 초기화
    setPlanTitle("");
    setEndTime({
      hour: "",
      min: "",
    });
    setStartTime({
      hour: "",
      min: "",
    });
    // 모달 열기
    dispatch(planModalOpenStatus(!planModalOpen));
    setIsEdit(false);
  };

  // 모달창 수정할때 열기
  const openEditModalHanlder = (id, val) => {
    dispatch(planModalOpenStatus(!planModalOpen));
    setIsEdit(true);
    setSelectedId(id);
    setPlanTitle(val.content);
    setStartTime({
      hour: val.startTime.slice(0, 2),
      min: val.startTime.slice(3, 5),
    });
    setEndTime({
      hour: val.endTime.slice(0, 2),
      min: val.endTime.slice(3, 5),
    });
    setPlan({
      ...val,
    });
  };

  // 계획 삭제
  const closeModalHanlder = (id, plan) => {
    console.log(id, plan);
    console.log(isEdit);
    if (plan?.hasOwnProperty("timerId")) {
      dispatch(planModalOpenStatus(!planModalOpen));
    } else {
      if (isEdit) {
        if (window.confirm("삭제하시겠습니까?")) {
          dispatch(__deletePlan({ id }));
          dispatch(planModalOpenStatus(!planModalOpen));
        }
      } else {
        dispatch(planModalOpenStatus(!planModalOpen));
      }
    }

    // else if ()
    // if (isEdit) {
    //   if (window.confirm("삭제 하시겠습니까?")) {
    //     dispatch(__deletePlan({ id }));
    //   }
    // }
  };

  // 타이머 제목 수정
  const editTimerContentHandler = (id) => {
    if (!planTitle) {
      alert("제목을 입력해주세요!");
    } else {
      const title = { content: planTitle };
      // dispatch(timerTest({ title, id }));
      dispatch(__putTimerContent({ title, id }));
      dispatch(planModalOpenStatus(!planModalOpen));
    }
  };

  // 계획 추가, 계획 수정 // 나중에 변수명 수정 , 로직 간단하게 해야함 급하게 짬
  const doneAddModalHandler = (id) => {
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
        dispatch(planModalOpenStatus(!planModalOpen));
        if (isEdit) {
          dispatch(__putPlan({ planInfo, id }));
        } else {
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
    }
  };
  //

  // 플랜 제목
  const changeTitleHandler = (e) => {
    setPlanTitle(e.target.value);
    setCountInput(e.target.value.length);
  };

  // 플랜 시작시간 종료시간
  const changeStartTimeHandler = (e) => {
    let time = e.target.value;
    console.log(time);
    // if()

    setStartTime({ ...startTime, [e.target.name]: time });
  };

  const changeEndTimeHandler = (e) => {
    let time = e.target.value;
    // 한자리 숫자 시간 입력시
    // if (time < 10) {
    //   time = "0" + time;
    // }
    setEndTime({ ...endTime, [e.target.name]: time });
  };

  // 플랜 등록
  // 숫자만 입력되도록 하는 함수, input type number 일때 maxLength 안먹힘
  const isNumber = (e) => {
    if (e.target.value.length > e.target.maxLength)
      e.target.value = e.target.value.slice(0, e.target.maxLength);
  };

  return (
    <>
      <Header
        menuName="Planner"
        right={IMAGES.menu}
        left={IMAGES.home}
        leftLink={PATH.timer}
        clickMenuHandler={clickGroupMenuHandler}
      />
      <StContainer>
        <StDiv>
          <UsernameCard
            link={PATH.profile}
            username={plans.username}
            profileImage={plans.profileImage}
          />
          <Link to={PATH.calendar(username)}>{IMAGES.calendarIcon}</Link>
        </StDiv>
        <StDiv>
          <StDateBox>{getDayOfWeek(date)}</StDateBox>
          <StTodayCarrot>
            오늘 수확량 <span>{plans.carrot}</span>
          </StTodayCarrot>
        </StDiv>
        <StBodyDiv>
          <SortingBtnGroup
            onClickGetAllPlan={onClickGetAllPlan}
            onClickgetPlan={onClickgetPlan}
            onClickgetFocusPlan={onClickgetFocusPlan}
          />
          {sortedPlans.map((val) => {
            let color = "";
            const id = val.timerId ?? val.planId;
            if (Object.keys(val)[0] === "timerId") {
              color = "#F27808";
            } else {
              color = "#67986C";
            }
            return (
              <div key={uuidv4()}>
                <PlanCard
                  onClick={
                    plans.isOwner
                      ? () => {
                          openEditModalHanlder(id, val);
                        }
                      : () => {}
                  }
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
      <SlideModal height="258px" bottom="-260px" toggle={planModalOpen}>
        <PlannerModal
          openModalHanlder={openModalHanlder}
          doneAddModalHandler={doneAddModalHandler}
          changeTitleHandler={changeTitleHandler}
          changeStartTimeHandler={changeStartTimeHandler}
          changeEndTimeHandler={changeEndTimeHandler}
          closeModalHanlder={closeModalHanlder}
          editTimerContentHandler={editTimerContentHandler}
          planTitle={planTitle}
          countInput={countInput}
          startTime={startTime}
          endTime={endTime}
          isNumber={isNumber}
          isEdit={isEdit}
          id={selectedId}
          plan={plan}
          date={date}
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
