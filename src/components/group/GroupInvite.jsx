import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import styled from "styled-components";

import Input from "../element/Input";
import Header from "../header/Header";
import TimerButton from "../timer/TimerButton";

import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/index";

import { detailMenuOpenStatus } from "../../redux/modules/modalSlice";

import {
  __getGroupMemberInvite,
  __postGroupMemberInvite,
} from "../../redux/modules/groupSlice";

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

  //검색 리스트
  const searchMember = useSelector((state) => state.group.searchMember);
  console.log(searchMember);

  const clickSearch = () => {
    dispatch(__getGroupMemberInvite({ groupId, username }));
  };

  //체크박스
  //체크리스트를 저장할 배열
  const [checkedList, setCheckedList] = useState([]);

  //체크하면 checkedListd에 값이 담기고, 체크를 해제하면 값이 사라진다.
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };

  //리스팅 목록에서 제거
  const onRemove = (item) => {
    setCheckedList(checkedList.filter((el) => el !== item));
  };

  //그룹원 초대 완료하기
  const InviteSubmit = () => {
    const inviteList = { username: checkedList };
    dispatch(__postGroupMemberInvite({ groupId, inviteList }));
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
            {searchMember?.map((item) => (
              <UserLayout key={item.memberId}>
                <User>
                  <img src={item.profileImage} />
                  <span>{item.username}</span>
                </User>
                {!item.isMember ? (
                  <input
                    type="checkbox"
                    value={item.username}
                    onChange={(e) => {
                      onCheckedElement(e.target.checked, e.target.value);
                    }}
                    checked={checkedList.includes(item.username) ? true : false}
                  />
                ) : (
                  <div>{IMAGES.blockCircle}</div>
                )}
              </UserLayout>
            ))}
          </SearchList>
          <MoreToggle onClick={clickToggle}>
            <p>더보기</p>
          </MoreToggle>
          {!toggle ? (
            <UserBox>
              {checkedList.map((item) => (
                <div key={item}>
                  <span>{item}</span>
                  <button onClick={() => onRemove(item)}>x</button>
                </div>
              ))}
            </UserBox>
          ) : null}
          <TimerButton onClick={InviteSubmit}>초대</TimerButton>
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
  margin-top: 10px;
`;

const MoreToggle = styled.div``;
