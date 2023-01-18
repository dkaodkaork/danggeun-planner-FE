import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

import Input from "../element/Input";
import Header from "../header/Header";
import TimerButton from "../timer/TimerButton";

import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/index";

import {
  __getGroupMemberInvite,
  __postGroupMemberInvite,
} from "../../redux/modules/groupSlice";

//그룹 오픈 관련
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

const GroupInvite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  //그룹아이디
  const param = useParams();
  const groupId = param.groupId;

  //검색 리스트
  const searchMember = useSelector((state) => state.group.searchMember);

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
    dispatch(__postGroupMemberInvite({ groupId, inviteList })).then(() => {
      navigate(PATH.groupdetail(groupId));
    });
  };

  //그룹 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  return (
    <>
      <Header
        menuName="Group"
        right={IMAGES.menu}
        left={IMAGES.home}
        leftLink={PATH.timer}
        clickMenuHandler={clickGroupMenuHandler}
      ></Header>
      <Header
        fontFamily="MaplestoryOTFBold"
        menuName="그룹원 추가"
        height="56px"
        padding="12px 28px 12px 28px "
        fontSize="2.0rem"
        fontWeight="700"
        width="219px"
        left={IMAGES.fold}
        onClick={() => navigate(-1)}
        marginRight="40px"
      />
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
          <TimerButton onClick={InviteSubmit} marginTop="30px">
            초대
          </TimerButton>
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

const UserBox = styled.div`
  margin-top: 25px;
  width: 319px;
  height: 160px;
  background: #f1e5d2;
  border-radius: 12px;
  padding: 26px 28px;
  overflow: scroll;

  div {
    margin-top: 14px;
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