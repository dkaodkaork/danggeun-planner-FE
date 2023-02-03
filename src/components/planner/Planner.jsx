import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getAllPlan,
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
import PlanCard from "./PlanCard";
import PlannerModal from "./PlannerModal";
import SlideModal from "../element/SlideModal";
import SortingBtnGroup from "./SortingBtnGroup";
import PlannerSubHeader from "./PlannerSubHeader";
import MainHeader from "../header/MainHeader";
import PrivatePlanner from "./PrivatePlanner";
import { useModal } from "../../hooks/useModal";
import Button from "../timer/TimerButton";

const Planner = () => {
  // hook
  const { isModal, modalHandler } = useModal();
  const dispatch = useDispatch();
  const { date, username } = useParams();

  const plans = useSelector((state) => state?.planner?.data);

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

  // onchange로 받은 값 시작시간 끝나는 시간 파싱해서 보낼것
  const planInfo = {
    startTime: planStartTime(startTime, date),
    endTime: planStartTime(endTime, date),
    content: planTitle,
  };

  // 메뉴
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  // 플래너 조회 요청
  useEffect(() => {
    dispatch(__getAllPlan({ username: username, date: date })).then((res) => {
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
    modalHandler();
    setIsEdit(false);
  };

  // 모달창 수정할때 열기
  const openEditModalHanlder = (id, val) => {
    modalHandler();
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
    modalHandler();
  };

  // 계획 삭제
  const closeModalHanlder = (id, plan) => {
    if (plan?.hasOwnProperty("timerId")) {
      modalHandler();
    } else {
      if (isEdit) {
        dispatch(__deletePlan({ id }));
        modalHandler();
      } else {
        modalHandler();
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
      modalHandler();
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
              : modalHandler();
          });
        } else {
          dispatch(__postPlan(planInfo)).then((res) => {
            res?.error?.message === "Rejected"
              ? carrotAlert(res.payload)
              : modalHandler();
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
  };

  const changeEndTimeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "hour":
        if (value < 24) {
          return setEndTime({ ...endTime, [name]: value });
        } else {
          carrotAlert(MSG.hourErrMsg);
        }
        return;
      case "min":
        if (value < 60) {
          return setEndTime({ ...endTime, [name]: value });
        } else {
          carrotAlert(MSG.minErrMsg);
        }
        return;
      default:
        return;
    }
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
                        modalHandler={modalHandler}
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <StEmptyBodyDiv>
                <StEmptyPlanDiv>
                  아직 아무것도 기록되지 않았습니다.
                </StEmptyPlanDiv>
              </StEmptyBodyDiv>
            )}
          </StBodyDiv>
          <StBox>
            {plans.isOwner && !isModal && (
              <Button
                onClick={openModalHanlder}
                backgroundColor="#4A8A51"
                height="75px"
                width="319px"
              >
                계획 추가
              </Button>
            )}
          </StBox>
        </StContainer>
      )}
      {isModal ? (
        <SlideModal
          height="258px"
          bottom="-60px"
          toggle={isModal}
          cancleHandler={modalOutSideClick}
        >
          <PlannerModal
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
      ) : null}
    </>
  );
};

export default Planner;

const StBox = styled.div`
  position: fixed;
  bottom: 28px;
`;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
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

  span {
    color: #f27808;
  }
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  width: 100%;
  justify-content: space-between;

  padding: 0px 32px 0px 29px;
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
  height: 60.3103vh;
  overflow-y: scroll;
  margin-top: 6px;
`;

const StEmptyBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
