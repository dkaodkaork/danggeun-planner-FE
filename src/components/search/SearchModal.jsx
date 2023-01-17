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

const SearchModal = ({ propsState }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchData = useSelector((state) => state.search.members);

  //메뉴 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  //팝업 없애기
  const [openPopup, setOpenPopup] = useState(true);

  //팝업 상태 초기화하기
  useEffect(() => {
    setOpenPopup(true);
  }, [propsState]);

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

  //검색 핸들러
  const clickSearch = () => {
    dispatch(__getSearchUser(username));
  };

  //리스트에 있는 유저 클릭 핸들러
  const clickUser = (username) => {
    setOpenPopup(false);
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
    navigate(PATH.calendar(username));
  };

  return (
    <>
      {openPopup && (
        <Modal height="371px">
          <Layout>
            <p>검색할 유저 닉네임</p>

            <Search>
              <Input
                placeholder="닉네임을 입력하세요"
                onChange={onInputHandler}
                maxLength="6"
                margin="0"
                width="254px"
                height="55px"
              />
              <button onClick={clickSearch}>{IMAGES.search}</button>
            </Search>
            <Flex>
              <SearchList toggle={toggle}>
                {searchData?.map((item) => (
                  <UserLayout key={item.memberId}>
                    <User
                      onClick={() => {
                        clickUser(item.username);
                      }}
                    >
                      <img src={item.profileImage} />
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
  padding: 24px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Search = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchList = styled.div`
  width: 292px;
  height: ${(props) => (props.toggle ? "376px" : "190px")};
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
  img {
    width: 30px;
    margin-right: 7px;
  }
  span {
    font-family: "Pretendard-Regular";
    color: #595550;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

const MoreToggle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
