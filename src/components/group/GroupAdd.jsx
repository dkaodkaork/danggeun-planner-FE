import React, { useState } from "react";
import Header from "../header/Header";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";

import Input from "../element/Input";
import Textarea from "../element/Textarea";
import TimerButton from "../timer/TimerButton";

const GroupAdd = () => {
  let [textareaCount, setTextareaCount] = useState(0);
  let [inputCount, setInputCount] = useState(0);
  let [value, setValue] = useState("");

  const onTextareaHandler = (e) => {
    setTextareaCount(e.target.value.length);

    //정규식으로 byte 변환하는 법
    // setCount(
    //   e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
    // );
  };

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  return (
    <>
      <Header menuName="Group" right={IMAGES.menu} left={IMAGES.home}></Header>
      <GroupLayout>
        <AddInfo>
          <h1>그룹 만들기</h1>
          <p>
            가족, 친구들과 집중 상황을 공유하세요.
            <br />
            누가 더 많은 당근을 수확하는지 겨루고 격려하세요!
          </p>
        </AddInfo>
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
          <Textarea onChange={onTextareaHandler} value={value} maxLength="60" />
          <p>
            <span>{textareaCount}</span>
            <span>/60 자</span>
          </p>
        </Addcontents>
        <TimerButton marginTop="80px" width="319px">
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
