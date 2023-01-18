import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/index";

import {
  groupMenuOpenStatus,
  detailMenuOpenStatus,
} from "../../redux/modules/modalSlice";

import { __getUserInfo } from "../../redux/modules/mypageSlice";

import SearchModal from "../search/SearchModal.jsx";

import moment from "moment";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //오늘 날짜 가져오기
  const today = moment().format("YYYY-MM-DD");

  //닉네임,프로필 조회
  useEffect(() => {
    dispatch(__getUserInfo());
  }, [dispatch]);

  const userInfo = useSelector((state) => state.mypage.data);

  //메뉴 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  //메뉴 클릭 시 이동 핸들러
  //그룹
  const clickGroupNav = () => {
    navigate(PATH.grouplist);
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  //캘린더
  const clickCalendarNav = () => {
    navigate(PATH.calendar(userInfo.username));
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  //검색
  const clickSearchNav = () => {
    setModalOpen(!modalOpen);
  };
  //타이머
  const clickTimverNav = () => {
    navigate(PATH.timer);
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  //플래너
  const clickPlannerNav = () => {
    navigate(PATH.planner(userInfo.username, today));
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  //검색 모달
  const [modalOpen, setModalOpen] = useState(false);

  //검정 배경 클릭 시 메뉴 닫기
  const clickBackdropHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  return (
    <>
      <ModalBackdrop toggle={groupMenuOpen} onClick={clickBackdropHandler}>
        <MenuLayout toggle={groupMenuOpen}>
          <MenuIcon>
            <button onClick={clickGroupMenuHandler}>{IMAGES.nextArrow}</button>
            <ImgCircle>
              <ProfileImg src={userInfo?.profileImage} />
            </ImgCircle>
          </MenuIcon>
          <Nickname>{userInfo?.username}</Nickname>
          <MenuNav>
            <MenuButton onClick={clickTimverNav}>타이머</MenuButton>
            <MenuButton onClick={clickCalendarNav}>캘린더</MenuButton>
            <MenuButton onClick={clickPlannerNav}>플래너</MenuButton>
            <MenuButton onClick={clickGroupNav}>그룹</MenuButton>
          </MenuNav>
          <Search>
            <button onClick={clickSearchNav}>{IMAGES.searchIcon}</button>
            <span>검색</span>
          </Search>
        </MenuLayout>
      </ModalBackdrop>
      {modalOpen && <SearchModal propsState={modalOpen} />}
    </>
  );
};

export default Menu;

const ModalBackdrop = styled.div`
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  width: 375px;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  /* transition: all 0.4s; */
  z-index: 10;
`;

const MenuLayout = styled.div`
  width: 196px;
  background-color: #fffdfa;
  position: absolute;
  right: ${(props) => (props.toggle ? "0" : "-196px")};
  height: 100%;
  transition: all 0.4s;
  padding: 28px;
  border-radius: 12px 0px 0px 12px;
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 24px;
`;

const MenuButton = styled.button`
  width: 140px;
  height: 75px;
  background: #f9f3ea;
  border: 1px solid #4a8a51;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-family: "MaplestoryOTFBold";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 27px;
  text-align: center;
  color: #4a8a51;
  gap: 24px;
`;

//프로필 이미지 둥글게
const ImgCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 70%;
  overflow: hidden;
`;
const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Nickname = styled.div`
  margin-top: 24px;
  font-family: "Pretendard-Bold";
  font-weight: 700;
  font-size: 1.6rem;
  text-align: right;
  color: #595550;
`;

const Search = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  span {
    font-family: "MaplestoryOTFLight";
    font-weight: 300;
    font-size: 2rem;
    line-height: 22px;
    text-decoration-line: underline;
    color: #4a8a51;
  }
`;
