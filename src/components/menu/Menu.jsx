//리액트 관련
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

//리덕스
import {
  groupMenuOpenStatus,
  searchModalOpenStatus,
} from "../../redux/modules/modalSlice";
import { __getUserInfo } from "../../redux/modules/mypageSlice";

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
              <div />
              <button>{IMAGES.bell}</button>
            </StBellLayout>
          </MenuIcon>
          <StUser onClick={clickProfileNav}>
            <ProfileImg src={userInfo?.profileImage} />
            <Nickname>{userInfo?.username}</Nickname>
          </StUser>
          <MenuNav>
            <StMenuBtnLayout>
              {nowMenu === "t" && <Carrot>{IMAGES.menuCarrot}</Carrot>}
              <MenuButton
                onClick={clickTimverNav}
                className={nowMenu === "t" && "active"}
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
          <Search onClick={clickSearchNav}>
            <button>{IMAGES.searchIcon}</button>
            <span>검색</span>
          </Search>
        </MenuLayout>
      </ModalBackdrop>
      <SearchModal />
    </>
  );
};

export default Menu;

const ModalBackdrop = styled.div`
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  width: 375px;
  height: 100vh;
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
  height: 100vh;
  transition: ${(props) => (props.toggle ? "all 0.4s" : "0s")};
  /* transition: all 0.4s; */
  padding: 28px;
  border-radius: 12px 0px 0px 12px;
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

const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8.6207vh;
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
  margin-top: 8.6207vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

const Nickname = styled.div`
  font-family: "Pretendard-Bold";
  font-weight: 700;
  font-size: 1.6rem;
  text-align: right;
  color: #595550;
`;

const Search = styled.div`
  margin-top: 8.6207vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  span {
    font-family: "MaplestoryOTFLight";
    font-weight: 300;
    font-size: 2rem;
    line-height: 22px;
    text-decoration-line: underline;
    color: #4a8a51;
  }
`;
