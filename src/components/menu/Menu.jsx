//리액트 관련
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

//리덕스
import {
  groupMenuOpenStatus,
  searchModalOpenStatus,
} from "../../redux/modules/modalSlice";
import { __getUserInfo } from "../../redux/modules/mypageSlice";
import { __getAlarm, __patchAlarm } from "../../redux/modules/alarmSlice";

//상수, api
import { IMAGES, PATH } from "../../constants/index";

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

  //메뉴 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  //읽음 설정 관련
  const alarmRead = useSelector((state) => state.alarm.alarmRead);

  //그룹 읽음 데이터 확인
  const alarmIsRead = useSelector((state) => state.alarm.isRead);

  //알림 읽음 조회
  useEffect(() => {
    dispatch(__getAlarm());
    return () => {
      dispatch(groupMenuOpenStatus(false));
    };
  }, [alarmRead]);

  //닉네임,프로필 조회
  useEffect(() => {
    dispatch(__getUserInfo());
  }, []);

  const userInfo = useSelector((state) => state.mypage.data);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  //검색 모달 관리
  const searchModalOpen = useSelector(
    (state) => state.modalSlice.searchModalOpen
  );

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
    dispatch(searchModalOpenStatus(!searchModalOpen));
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
  //알림
  const clickBellNav = () => {
    dispatch(__patchAlarm());
    navigate(PATH.alarm);
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  //바깥쪽 클릭해서 닫히게 하는 useRef 구현
  const modalRef = useRef();

  const modalOutSideClick = (e) => {
    if (modalRef.current === e.target) {
      dispatch(groupMenuOpenStatus(!groupMenuOpen));
    }
  };

  return (
    <>
      <ModalBackdrop
        toggle={groupMenuOpen}
        ref={modalRef}
        onClick={(e) => modalOutSideClick(e)}
      >
        <MenuLayout toggle={groupMenuOpen}>
          <MenuIcon>
            <div onClick={clickGroupMenuHandler}>
              <button>{IMAGES.nextArrow}</button>
            </div>
            <StBellLayout onClick={clickBellNav}>
              {(!alarmRead || !alarmIsRead) && <div />}
              <button>{IMAGES.bell}</button>
            </StBellLayout>
          </MenuIcon>
          <MenuIcon2>
            <div></div>
            <button onClick={clickSearchNav}>{IMAGES.searchIcon}</button>
          </MenuIcon2>

          <StUser onClick={clickProfileNav}>
            <StMyPage>{IMAGES.mypage}</StMyPage>
            <ProfileImg src={userInfo?.profileImage} width="50px" />
            <Nickname>{userInfo?.username}</Nickname>
          </StUser>
          <MenuNav>
            <StMenuBtnLayout>
              {nowMenu === "" && <Carrot>{IMAGES.menuCarrot}</Carrot>}
              <MenuButton
                onClick={clickTimverNav}
                className={nowMenu === "" && "active"}
              >
                타이머
              </MenuButton>
            </StMenuBtnLayout>
            <StMenuBtnLayout>
              {nowMenu === "c" && <Carrot>{IMAGES.menuCarrot}</Carrot>}
              <MenuButton
                onClick={clickCalendarNav}
                className={nowMenu === "c" && "active"}
              >
                캘린더
              </MenuButton>
            </StMenuBtnLayout>
            <StMenuBtnLayout>
              {nowMenu === "p" && <Carrot>{IMAGES.menuCarrot}</Carrot>}
              <MenuButton
                onClick={clickPlannerNav}
                className={nowMenu === "p" && "active"}
              >
                플래너
              </MenuButton>
            </StMenuBtnLayout>
            <StMenuBtnLayout>
              {nowMenu === "g" && <Carrot>{IMAGES.menuCarrot}</Carrot>}
              <MenuButton
                onClick={clickGroupNav}
                className={nowMenu === "g" && "active"}
              >
                그룹
              </MenuButton>
            </StMenuBtnLayout>
          </MenuNav>
          {/* <Search onClick={clickSearchNav}>
            <button>{IMAGES.searchIcon}</button>
            <span>검색</span>
          </Search> */}
          <StMadyby>
            Carrot <strong>Planner</strong>
          </StMadyby>
        </MenuLayout>
      </ModalBackdrop>
      <SearchModal />
    </>
  );
};

export default Menu;

const ModalBackdrop = styled.div`
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  /* transition: all 0.4s; */
  z-index: 10;
`;

const menuAni = keyframes`
  0% {
    right: -196px;
  }
  100% {
    right: 0;
  }
`;

const MenuLayout = styled.div`
  display: ${(props) => !props.toggle && "none"};
  width: 196px;
  height: 100%;
  background-color: #f9f3ea;
  position: absolute;
  padding: 28px;
  border-radius: 12px 0px 0px 12px;
  animation: ${menuAni} 0.1s ease-out;
  right: ${(props) => props.toggle && "0"};
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  button {
    cursor: pointer;
  }
`;

const MenuIcon2 = styled(MenuIcon)`
  margin-top: 2vh;
  button {
    width: 25px;
  }
`;

const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.803vh;
  gap: 24px;
`;

const MenuButton = styled.button`
  width: 140px;
  height: 9.2365vh;
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
  cursor: pointer;

  &.active {
    background: #4a8a51;
    color: #fffdfa;
  }
`;

const StBellLayout = styled.div`
  position: relative;
  div {
    position: absolute;
    width: 10px;
    height: 10px;
    right: 0px;
    top: -2px;
    border-radius: 50%;
    background-color: #f27808;
  }
`;

const StMenuBtnLayout = styled.div`
  position: relative;
`;

const Carrot = styled.div`
  position: absolute;
  top: -12px;
  right: 8px;
`;

const StUser = styled.div`
  position: relative;
  margin-top: 5.5419vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
  cursor: pointer;
`;

const Nickname = styled.div`
  font-family: "Pretendard-Bold";
  font-weight: 700;
  font-size: 1.9rem;
  text-align: right;
  color: #595550;
`;

const StMadyby = styled.p`
  margin-top: 4vh;
  font-family: "MaplestoryOTFLight";
  font-weight: 300;
  font-size: 1.6rem;
  text-align: center;
  color: #f27808;

  strong {
    color: #4a8a51;
  }
`;

const StMyPage = styled.div`
  position: absolute;
  left: 93px;
  top: 0;
`;
