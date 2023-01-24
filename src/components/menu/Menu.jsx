//리액트 관련
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

//상수, api
import { IMAGES, PATH } from "../../constants/index";
import {
  groupMenuOpenStatus,
  searchModalOpenStatus,
} from "../../redux/modules/modalSlice";
import { __getUserInfo } from "../../redux/modules/mypageSlice";

//라이브러리
import moment from "moment";

//컴포넌트
import SearchModal from "../search/SearchModal.jsx";
import ProfileImg from "../element/ProfileImg.jsx";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //현재 메뉴 정보 가져오기
  const location = useLocation();
  const nowMenu = location.pathname.slice(1, 2);

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
  //마이페이지
  const clickProfileNav = () => {
    navigate(PATH.mypage);
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  //검색 모달
  const [modalOpen, setModalOpen] = useState(false);

  //검정 배경 클릭 시 메뉴 닫기
  const clickBackdropHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  //모달 오픈 관련
  const searchModalOpen = useSelector(
    (state) => state.modalSlice.searchModalOpen
  );

  //검정 배경 클릭 시 모달 닫기
  const clickBackdropModalHandler = () => {
    dispatch(searchModalOpenStatus(!searchModalOpen));
  };

  return (
    <>
      <ModalBackdrop toggle={groupMenuOpen}>
        <MenuLayout toggle={groupMenuOpen}>
          <MenuIcon>
            <div onClick={clickGroupMenuHandler}>
              <button>{IMAGES.nextArrow}</button>
            </div>
            <div onClick={clickProfileNav}>
              <ProfileImg src={userInfo?.profileImage} />
            </div>
          </MenuIcon>
          <Nickname onClick={clickProfileNav}>{userInfo?.username}</Nickname>
          <MenuNav>
            <MenuBtnLayout>
              {nowMenu === "t" && <Carrot>{IMAGES.menuCarrot}</Carrot>}
              <MenuButton
                onClick={clickTimverNav}
                className={nowMenu === "t" && "active"}
              >
                타이머
              </MenuButton>
            </MenuBtnLayout>
            <MenuBtnLayout>
              {nowMenu === "c" && <Carrot>{IMAGES.menuCarrot}</Carrot>}
              <MenuButton
                onClick={clickCalendarNav}
                className={nowMenu === "c" && "active"}
              >
                캘린더
              </MenuButton>
            </MenuBtnLayout>
            <MenuBtnLayout>
              {nowMenu === "p" && <Carrot>{IMAGES.menuCarrot}</Carrot>}
              <MenuButton
                onClick={clickPlannerNav}
                className={nowMenu === "p" && "active"}
              >
                플래너
              </MenuButton>
            </MenuBtnLayout>
            <MenuBtnLayout>
              {nowMenu === "g" && <Carrot>{IMAGES.menuCarrot}</Carrot>}
              <MenuButton
                onClick={clickGroupNav}
                className={nowMenu === "g" && "active"}
              >
                그룹
              </MenuButton>
            </MenuBtnLayout>
          </MenuNav>
          <Search onClick={clickSearchNav}>
            <button>{IMAGES.searchIcon}</button>
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
  height: 812px;
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
  height: 812px;
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
  &.active {
    background: #4a8a51;
    color: #fffdfa;
  }
`;

const MenuBtnLayout = styled.div`
  position: relative;
`;

const Carrot = styled.div`
  position: absolute;
  top: -12px;
  right: 8px;
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
