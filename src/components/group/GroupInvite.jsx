import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import styled from "styled-components";
import Modal from "../element/Modal";
import ButtonS from "../element/ButtonS";
import Input from "../element/Input";
import Header from "../header/Header";

import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/index";

import { detailMenuOpenStatus } from "../../redux/modules/modalSlice";

import { __getGroupMemberInvite } from "../../redux/modules/groupInviteSlice";

const GroupInvite = () => {
  const dispatch = useDispatch();

  //제목, 내용 담기
  const [username, setUsername] = useState("");

  const onInputHandler = (e) => {
    setUsername(e.target.value);
  };

  //더보기 토글
  const [toggle, setToggle] = useState(false);

  const clickToggle = () => {
    setToggle(!toggle);
  };

  //그룹아이디
  const param = useParams();
  const groupId = param.groupId;

  console.log(groupId);

  //검색
  const clickSearch = () => {
    dispatch(__getGroupMemberInvite({ groupId, username }));
  };

  return (
    <>
      <Header menuName="Group" right={IMAGES.menu} left={IMAGES.home}></Header>
      <GroupLayout>
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
            <UserLayout>
              <User>
                <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
                <span>닉네임</span>
              </User>
              <button>{IMAGES.emptyCircle}</button>
            </UserLayout>
          </SearchList>
          <MoreToggle onClick={clickToggle}>
            <p>더보기</p>
          </MoreToggle>
          {!toggle ? <UserBox></UserBox> : null}
        </Flex>
      </GroupLayout>
    </>
  );
};

export default GroupInvite;

const GroupLayout = styled.div`
  background-color: #f9f3ea;
  min-height: 722px; //812px에서 헤더 90px을 뺀 값을 줘야 스크롤이 안생김
  padding: 12px 28px 28px 28px;
  p {
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
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchList = styled.div`
  margin-top: 10px;
  width: 292px;
  height: ${(props) => (props.toggle ? "376px" : "190px")};
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 116px;
  padding-left: 12px;
  img {
    width: 20px;
  }
  span {
    font-family: "Pretendard-Regular";
    color: #595550;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

const UserBox = styled.div`
  margin-top: 25px;
  width: 319px;
  height: 160px;
  background-color: #2b70ad;
`;

const UserLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreToggle = styled.div``;
