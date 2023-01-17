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
    navigate(PATH.timer());
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  //플래너
  const clickPlannerNav = () => {
    navigate(PATH.planner(userInfo.username, today));
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  //검색 모달
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ModalBackdrop toggle={groupMenuOpen}>
        <MenuLayout toggle={groupMenuOpen}>
          <MenuIcon>
            <button onClick={clickGroupMenuHandler}>{IMAGES.nextArrow}</button>
            <img src={userInfo?.profileImage} />
          </MenuIcon>
          <div>{userInfo?.username}</div>
          <MenuNav>
            <button onClick={clickTimverNav}>타이머</button>
            <button onClick={clickCalendarNav}>캘린더</button>
            <button onClick={clickPlannerNav}>플래너</button>
            <button onClick={clickGroupNav}>그룹</button>
            <button onClick={clickSearchNav}>검색</button>
          </MenuNav>
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
`;
