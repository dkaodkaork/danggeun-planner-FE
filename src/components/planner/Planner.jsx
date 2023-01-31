import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { PATH, IMAGES, MSG } from "../../constants/index";
import { carrotAlert } from "../element/alert";

import { v4 as uuidv4 } from "uuid";

import { planStartTime, getDayOfWeek } from "./time";
import BottomBtn from "./BottomBtn";
import PlanCard from "./PlanCard";
import PlannerModal from "./PlannerModal";
import SlideModal from "../element/SlideModal";
import SortingBtnGroup from "./SortingBtnGroup";
import PlannerSubHeader from "./PlannerSubHeader";
import MainHeader from "../header/MainHeader";
import PrivatePlanner from "./PrivatePlanner";
import ConfirmModal from "./ConfirmModal";

const Planner = () => {
  // hook
  const dispatch = useDispatch();
  const { date, username } = useParams();

  const plans = useSelector((state) => state?.planner?.data);
  console.log(plans);
  // console.log(plans?.isPlannerOpened);
  // console.log(plans?.isOwner);

  const naviagte = useNavigate();

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
  const [isDisabled, setIsDisabled] = useState(false);

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  // onchange로 받은 값 시작시간 끝나는 시간 파싱해서 보낼것
  const planInfo = {
    startTime: planStartTime(startTime),
    endTime: planStartTime(endTime),
    content: planTitle,
  };

  // 메뉴
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  // 플래너 조회 요청
  useEffect(() => {
    dispatch(__getAllPlan({ username: username, date: date })).then((res) => {
      // console.log(res);
      if (res?.error?.message === "Rejected") {
        naviagte(PATH.error);
      }
    });
  }, [groupMenuOpen]);

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

  // 모달은 나주에 slice에서 빼고 하면 코드 많이 줄일 수 있을 것 같음. 상태로 관리
  const planModalOpen = useSelector(
    (state) => state.modalSlice.addPlanModalOpen
  );
  console.log(planModalOpen);

  // 모달창 열기
  const openModalHanlder = () => {
    setIsDisabled(false);
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
    setIsDisabled(true);
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

  const modalOutSideClick = (e) => {
    dispatch(planModalOpenStatus(!planModalOpen));
  };

  // 계획 삭제
  const closeModalHanlder = (id, plan) => {
    // console.log(id, plan);
    // console.log(isEdit);
    if (plan?.hasOwnProperty("timerId")) {
      dispatch(planModalOpenStatus(!planModalOpen));
    } else {
      if (isEdit) {
        carrotAlert("계획이 삭제 되었습니다!");
        dispatch(__deletePlan({ id }));
        dispatch(planModalOpenStatus(!planModalOpen));
      } else {
        dispatch(planModalOpenStatus(!planModalOpen));
      }
    }
  };

  // 타이머 제목 수정
  const editTimerContentHandler = (id) => {
    if (!planTitle) {
      carrotAlert(MSG.titleEmptyMsg);
    } else {
      const title = { content: planTitle };
      dispatch(__putTimerContent({ title, id }));
      dispatch(planModalOpenStatus(!planModalOpen));
    }
  };

  // 계획 추가, 계획 수정
  // 나중에 변수명 수정 , 로직 간단하게 해야함 급하게 짬 if문 중첩 수정 필요
  const doneAddModalHandler = (id) => {
    if (
      !planTitle ||
      !startTime.hour ||
      !startTime.min ||
      !endTime.hour ||
      !endTime.min
    ) {
      carrotAlert(MSG.planEmptyMsg);
    } else {
      if (
        startTime.hour > 23 ||
        startTime.hour < 0 ||
        startTime.min > 60 ||
        startTime.min < 0 ||
        endTime.hour > 24 ||
        endTime.hour < 0 ||
        endTime.min > 60 ||
        endTime.min < 0
      ) {
        carrotAlert(MSG.timeErrMsg);
      } else {
        if (isEdit) {
          dispatch(__putPlan({ planInfo, id })).then((res) => {
            res?.error?.message === "Rejected"
              ? carrotAlert(res.payload)
              : dispatch(planModalOpenStatus(!planModalOpen));
          });
        } else {
          dispatch(__postPlan(planInfo)).then((res) => {
            console.log(res);
            res?.error?.message === "Rejected"
              ? carrotAlert(res.payload)
              : dispatch(planModalOpenStatus(!planModalOpen));
          });
        }
      }
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
    // let time = e.target.value;
    const { name, value } = e.target;
    switch (name) {
      case "hour":
        if (value < 24) {
          return setStartTime({ ...startTime, [name]: value });
        } else {
          carrotAlert(MSG.hourErrMsg);
        }
        return;
      case "min":
        if (value < 60) {
          return setStartTime({ ...startTime, [name]: value });
        } else {
          carrotAlert(MSG.minErrMsg);
        }
        return;
      default:
        return;
    }
    // setStartTime({ ...startTime, [name]: value });
  };
  // console.log(startTime);

  const changeEndTimeHandler = (e) => {
    let time = e.target.value;
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
      <MainHeader
        title="PLANNER"
        leftLink={PATH.timer}
        leftSlot={IMAGES.home}
      />
      <PlannerSubHeader
        username={plans.username}
        profileImage={plans.profileImage}
        param={username}
      ></PlannerSubHeader>
      {!plans?.isPlannerOpened && !plans.isOwner ? (
        <PrivatePlanner />
      ) : (
        <StContainer>
          <StDiv>
            <StDateBox>{getDayOfWeek(date)}</StDateBox>
            <StTodayCarrot>
              오늘 수확량 <span>{plans.carrot}</span>
            </StTodayCarrot>
          </StDiv>
          <StBtnGroup>
            <SortingBtnGroup
              onClickGetAllPlan={onClickGetAllPlan}
              onClickgetPlan={onClickgetPlan}
              onClickgetFocusPlan={onClickgetFocusPlan}
            />
          </StBtnGroup>
          <StBodyDiv>
            {plans?.contents.length !== 0 ? (
              <>
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
              </>
            ) : (
              <StEmptyBodyDiv>
                <StEmptyPlanDiv>일정이 비었습니다.</StEmptyPlanDiv>
              </StEmptyBodyDiv>
            )}
          </StBodyDiv>
          {plans.isOwner && <BottomBtn onClick={openModalHanlder} />}
        </StContainer>
      )}
      <SlideModal
        height="258px"
        bottom="-60px"
        toggle={planModalOpen}
        cancleHandler={modalOutSideClick}
      >
        <PlannerModal
          planModalOpen={planModalOpen}
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
          isDisabled={isDisabled}
        />
      </SlideModal>
    </>
  );
};

// {confirmModalOpen ? (
//   <ConfirmModal
//     img={plans?.profileImage}
//     content={plans?.content}
//     onClick={() => {
//       setIsDelete(!isDelete);
//     }}
//   />
// ) : null}
export default Planner;

const StDiv1 = styled.div`
  height: 100%;
`;

const StContainer = styled.div`
  background-color: #f9f3ea;
  /* height: 80vh; */
  /* height: 100vh; */
`;

const StDateBox = styled.div`
  height: 19px;
  font-family: "Pretendard-Bold";
  font-size: 1.6rem;
  line-height: 19px;
  color: #595550;
  word-spacing: 2px;
  letter-spacing: -0.8px;
`;

const StTodayCarrot = styled.div`
  height: 17px;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  line-height: 17px;
  color: #595550;
  text-align: right;
  margin-right: 4px;

  span {
    color: #f27808;
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

const StBtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 600px;
  overflow: scroll;
  margin-top: 6px;
`;

const StEmptyBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 507px;
  margin-top: 6px;
`;

const StEmptyPlanDiv = styled.div`
  text-align: center;
  margin-top: 234px;
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  color: #a4a4a4;
`;
