import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../header/Header";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/index";

import Input from "../element/Input";
import Textarea from "../element/Textarea";
import TimerButton from "../timer/TimerButton";

import { __postGroupAdd } from "../../redux/modules/groupSlice";

//메뉴 오픈 관련
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

const GroupAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //글자수 카운터
  let [textareaCount, setTextareaCount] = useState(0);
  let [inputCount, setInputCount] = useState(0);

  //제목, 내용 담기
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");

  const onInputHandler = (e) => {
    setGroupName(e.target.value);
    setInputCount(e.target.value.length);
  };

  const onTextareaHandler = (e) => {
    setDescription(e.target.value);
    setTextareaCount(e.target.value.length);
  };

  const onClickGroupAdd = () => {
    if (inputCount === 0) {
      alert("그룹 제목을 입력해주세요");
    } else if (textareaCount === 0) {
      alert("그룹 내용을 입력해주세요");
    } else {
      return dispatch(__postGroupAdd({ groupName, description })).then(
        (res) => {
          const groupId = res.payload.groupId;
          navigate(PATH.groupdetail(groupId));
          // navigate(`/group/${groupId}`);
        }
      );
    }
  };

  //메뉴 오픈 관련
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
        menuName="그룹 만들기"
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
        {/* <AddInfo>
          <h1>그룹 만들기</h1>
          <p>
            가족, 친구들과 집중 상황을 공유하세요.
            <br />
            누가 더 많은 당근을 수확하는지 겨루고 격려하세요!
          </p>
        </AddInfo> */}
        <AddName>
          <h3>그룹 이름</h3>
          <Input onChange={onInputHandler} maxLength="10" />
          <p>
            <span>{inputCount}</span>
            <span>/10 자</span>
          </p>
        </AddName>
        <Addcontents>
          <h3>그룹 소개</h3>
          <Textarea onChange={onTextareaHandler} maxLength="50" />
          <p>
            <span>{textareaCount}</span>
            <span>/50 자</span>
          </p>
        </Addcontents>
        <TimerButton marginTop="80px" width="319px" onClick={onClickGroupAdd}>
          완 료
        </TimerButton>
        <PageMsg>그룹 이름과 소개는 언제든 수정할 수 있습니다.</PageMsg>
      </GroupLayout>
    </>
  );
};

export default GroupAdd;

const GroupLayout = styled.div`
  background-color: #f9f3ea;
  min-height: 722px; //812px에서 헤더 90px을 뺀 값을 줘야 스크롤이 안생김
  padding: 0 32px 42px 32px;
`;

const AddInfo = styled.div`
  margin-top: 64px;
  text-align: center;
  color: #595550;
  h1 {
    font-family: "MaplestoryOTFBold";
    font-size: 2.4rem;
    font-weight: 700;
  }
  p {
    margin-top: 14px;
    font-family: "MaplestoryOTFLight";
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2rem;
  }
`;

const AddName = styled.div`
  margin-top: 64px;
  h3 {
    font-family: "Pretendard-Regular";
    font-size: 1.2rem;
    font-weight: 700;
    color: #595550;
  }
  p {
    text-align: right;
    color: #4a8a51;
    font-family: "Pretendard-Regular";
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const Addcontents = styled.div`
  margin-top: 20px;
  h3 {
    font-family: "Pretendard-Regular";
    font-size: 1.2rem;
    font-weight: 700;
    color: #595550;
  }
  p {
    text-align: right;
    color: #4a8a51;
    font-family: "Pretendard-Regular";
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const PageMsg = styled.p`
  margin-top: 20px;
  font-family: "Pretendard-Regular";
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: #f27808;
`;
