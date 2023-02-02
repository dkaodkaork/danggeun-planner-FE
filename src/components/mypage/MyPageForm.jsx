import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getUserInfo,
  __putPlannerOpen,
} from "../../redux/modules/mypageSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PATH, IMAGES } from "../../constants/index";
import { api } from "../../core/api";
import { carrotConfirm } from "../element/alert";

import Button from "../timer/TimerButton";
import SubHeader from "../header/SubHeader";
import MainHeader from "../header/MainHeader";

const MypageForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.mypage.data);

  useEffect(() => {
    dispatch(__getUserInfo());
  }, []);

  const checkHandler = () => {
    dispatch(__putPlannerOpen(!userInfo.isPlannerOpened));
  };

  const logoutHandler = async () => {
    try {
      const response = await api.postLogoutApi();
    } catch (error) {}
    await localStorage.clear();
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <>
      <MainHeader leftLink={PATH.timer} leftSlot={IMAGES.home} title="MY" />
      <SubHeader
        title="마이페이지"
        rightLink={PATH.profile}
        rightSlot={IMAGES.edit}
      />
      <StContainer>
        <StProfileBody>
          <StProfileBox>
            <StImg src={userInfo.profileImage}></StImg>
            <StInfoBox>
              <StInfo>{userInfo.username}</StInfo>
              <StTotalCarrot>
                <p>누적</p> <span>{IMAGES.carrotSticker}</span>
                {userInfo.totalCarrot}
              </StTotalCarrot>
            </StInfoBox>
          </StProfileBox>
          <StHr></StHr>
          <StEmailBox>{userInfo.email}</StEmailBox>
          <StCheckBoxContainer>
            <StDiv>다른 사람들에게 플래너 공개</StDiv>
            <StCheckBoxWrapper className="switch">
              <StCheckBox
                id="checkbox"
                type="checkbox"
                onChange={checkHandler}
                checked={
                  userInfo?.isPlannerOpened === "" ||
                  userInfo?.isPlannerOpened === undefined
                    ? true
                    : userInfo?.isPlannerOpened
                }
              />
              <StCheckBoxLabel htmlFor="checkbox" />
            </StCheckBoxWrapper>
          </StCheckBoxContainer>
          <StBtns>
            <StGift url={IMAGES.gift}></StGift>
            <Button
              width="319px"
              height="40px"
              fontSize="1.6rem"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScLsM2BlULlPVuedfEZshRzFts1nBluWWiltFux5T4bYnCv3g/viewform"
                )
              }
            >
              리뷰 남기고 선물 받기
            </Button>
            <Button
              width="319px"
              height="40px"
              fontSize="1.6rem"
              border="1px solid #F27808"
              backgroundColor="#F9F3EA"
              color="#F27808"
              onClick={() =>
                window.open("https://danggeunplanner.tistory.com/")
              }
            >
              공지 사항
            </Button>
            <StButton onClick={logoutHandler}>로그아웃</StButton>
          </StBtns>
        </StProfileBody>
      </StContainer>
    </>
  );
};

export default MypageForm;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 684px;
`;

const StProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

const StProfileBox = styled.div`
  width: 319px;
  height: 125px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
`;

const StImg = styled.img`
  border-radius: 100%;
  object-fit: cover;
  width: 125px;
  height: 125px;
  border: 0px;
`;

const StInfoBox = styled.div`
  width: 162px;
`;
const StInfo = styled.div`
  width: 140px;
  height: 27px;

  font-family: "MaplestoryOTFBold";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 27px;

  margin: 70px 24px 10px 24px;

  color: #595550;
`;

const StTotalCarrot = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  text-align: center;
  gap: 6.4px;

  font-family: "Pretendard-Regular";
  font-size: 1.6rem;

  color: #f27808;

  p {
    margin-left: 24px;
    width: 30px;
    height: 22px;
    line-height: 15px;
    font-family: "Pretendard-Regular";
    font-size: 1.4rem;
    padding-top: 2px;

    color: #403b36;
  }
`;

const StHr = styled.hr`
  width: 319px;
  opacity: 0.1;
  border: 1px solid #000000;
  margin: 24px 0px 12px 0px;
`;

const StEmailBox = styled.div`
  width: 319px;
  height: 22px;

  font-family: "Pretendard-Regular";
  font-size: 1.4rem;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #595550;
`;

const StCheckBoxContainer = styled.div`
  width: 319px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f1e5d2;
  border-radius: 12px;
  margin-top: 24px;
  padding: 19px;
`;

const StDiv = styled.div`
  height: 22px;
  color: #595550;
  font-size: 1.5rem;
  font-family: "Pretendard-Regular";
  line-height: 22px;
`;

const StBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 50px;
  width: 319px;
  height: 174px;
  position: relative;
`;

const StGift = styled.div`
  position: absolute;
  top: -10%;
  right: 7%;
  z-index: 5;
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.url});
`;

const StButton = styled.button`
  margin-top: 11px;
  font-family: "MaplestoryOTFLight";
  font-size: 1.7rem;
  color: #4a8a51;
  text-decoration-line: underline;
  text-align: center;
`;

const StCheckBoxWrapper = styled.div`
  position: relative;
`;
const StCheckBoxLabel = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  top: 8px;
  left: 0;
  width: 40px;
  height: 14px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.1s;
  }
`;
const StCheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${StCheckBoxLabel} {
    background: #f27808;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
