import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/index";

import { __getSearchUser } from "../../redux/modules/searchSlice.js";

//메뉴 오픈 관련
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

import Modal from "../element/Modal.jsx";
import Input from "../element/Input.jsx";
import ProfileImg from "../element/ProfileImg.jsx";

const SearchModal = ({ propsState }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const searchData = useSelector((state) => state.search.members);

  //메뉴 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  //팝업 없애기
  const [openPopup, setOpenPopup] = useState(true);

  //팝업 상태 초기화하기
  useEffect(() => {
    setOpenPopup(true);
  }, []);

  //이름 Input
  const [username, setUsername] = useState("");

  const onInputHandler = (e) => {
    setUsername(e.target.value);
  };

  //더보기 토글
  const [toggle, setToggle] = useState(false);

  const clickToggle = () => {
    setToggle(!toggle);
  };

  //검색 리스트를 저장할 배열
  const [searchList, setSearchList] = useState([]);
  //검색 리스트 초기화
  useEffect(() => {
    setSearchList([]);
  }, []);

  //검색 핸들러
  const clickSearch = () => {
    if (username === "") {
      alert("닉네임을 입력해주세요");
    } else {
      dispatch(__getSearchUser(username)).then((res) => {
        console.log(res);
        if (res.payload.members.length === 0) {
          alert("검색 결과가 없습니다");
        } else {
          setSearchList(res.payload.members);
        }
      });
    }
  };

  //리스트에 있는 유저 클릭 핸들러
  const clickUser = (username) => {
    setOpenPopup(false);
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
    navigate(PATH.calendar(username));
  };

  //모달 오픈 관련
  const searchModalOpen = useSelector(
    (state) => state.modalSlice.searchModalOpen
  );

  return (
    <>
      {openPopup && (
        <Modal height={!toggle ? "371px" : "597px"} width="308px">
          <Layout>
            <TopLayout>
              <p>검색할 유저 닉네임</p>
              <button
                onClick={() => {
                  setOpenPopup(false);
                }}
              >
                닫기
              </button>
            </TopLayout>
            <Search>
              <Input
                placeholder="닉네임을 입력하세요"
                onChange={onInputHandler}
                maxLength="6"
                margin="0"
                width="195px"
                height="55px"
              />
              <button onClick={clickSearch}>{IMAGES.search}</button>
            </Search>
            <Flex>
              <SearchList toggle={toggle}>
                {searchList?.map((item) => (
                  <UserLayout key={item.memberId}>
                    <User
                      onClick={() => {
                        clickUser(item.username);
                      }}
                    >
                      <ProfileImg src={item.profileImage} />
                      {/* <img src={item.profileImage} /> */}
                      <span>{item.username}</span>
                    </User>
                  </UserLayout>
                ))}
              </SearchList>
              <MoreToggle onClick={clickToggle}>
                {!toggle ? (
                  <>
                    <button>{IMAGES.downArrowS}</button>
                    <p>더보기</p>
                  </>
                ) : (
                  <>
                    <button>{IMAGES.upArrowS}</button>
                    <p>접기</p>
                  </>
                )}
              </MoreToggle>
            </Flex>
          </Layout>
        </Modal>
      )}
    </>
  );
};

export default SearchModal;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  p {
    font-family: "Pretendard-Bold";
    font-size: 1.2rem;
    font-weight: 700;
    color: #595550;
  }
`;

const TopLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    font-family: "Pretendard-Bold";
    font-size: 1.2rem;
    font-weight: 700;
    color: #595550;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Search = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchList = styled.div`
  width: 233px;
  height: ${(props) => (props.toggle ? "416px" : "190px")};
  overflow: scroll;
`;

const UserLayout = styled.div`
  width: 292px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 30px;
  overflow: scroll;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 116px;
  padding-left: 12px;
  span {
    margin-left: 7px;
    font-family: "Pretendard-Regular";
    color: #595550;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

const MoreToggle = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
