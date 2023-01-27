//리액트 관련
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//리덕스
import { __postGroupAdd } from "../../redux/modules/groupSlice";
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

//상수, api
import { IMAGES, PATH } from "../../constants/index";

//컴포넌트
import Header from "../header/Header";
import SubHeader from "../header/SubHeader";
import Input from "../element/Input";
import Textarea from "../element/Textarea";
import TimerButton from "../timer/TimerButton";

const GroupAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //글자수 카운터
  const [textareaCount, setTextareaCount] = useState(0);
  const [inputCount, setInputCount] = useState(0);

  //제목, 내용 담기
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");

  //버튼 활성화
  const [disabled, setDisabled] = useState(false);

  const onInputHandler = (e) => {
    setGroupName(e.target.value);
    setInputCount(e.target.value.length);
    if (textareaCount > 0) {
      setDisabled(true);
    }
  };

  const onTextareaHandler = (e) => {
    setDescription(e.target.value);
    setTextareaCount(e.target.value.length);
    if (inputCount > 0) {
      setDisabled(true);
    }
  };

  const contents = description.replace(/(?:\r\n|\r|\n)/g, "<br>");
  // console.log(contents);

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
        title="Group"
        rightSlot={IMAGES.menu}
        leftSlot={IMAGES.home}
        leftLink={PATH.timer}
        onClick={clickGroupMenuHandler}
      ></Header>
      <SubHeader
        title="그룹 만들기"
        leftSlot={IMAGES.fold}
        leftLink={PATH.grouplist}
      />
      <GroupLayout>
        <AddName>
          <h3>그룹 이름</h3>
          <Input
            onChange={onInputHandler}
            maxLength="10"
            placeholder="그룹 이름을 입력하세요"
          />
          <p>
            <span>{inputCount}</span>
            <span>/10</span>
          </p>
        </AddName>
        <Addcontents>
          <h3>그룹 소개</h3>
          <Textarea
            onChange={onTextareaHandler}
            maxLength="50"
            placeholder="그룹 소개를 입력하세요"
          />
          <p>
            <span>{textareaCount}</span>
            <span>/50</span>
          </p>
        </Addcontents>
        <StBottom>
          <TimerButton
            width="319px"
            onClick={onClickGroupAdd}
            disabled={!disabled || textareaCount === 0 || inputCount === 0}
          >
            완 료
          </TimerButton>
          <PageMsg>그룹 이름과 소개는 언제든 수정할 수 있습니다.</PageMsg>
        </StBottom>
      </GroupLayout>
    </>
  );
};

export default GroupAdd;

const GroupLayout = styled.div`
  background-color: #f9f3ea;
  height: 100%;
  padding: 13px 32px 42px 32px;
`;

const AddName = styled.div`
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

const StBottom = styled.div`
  position: fixed;
  bottom: 70px;
`;

const PageMsg = styled.p`
  margin-top: 24px;
  font-family: "Pretendard-Regular";
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: #f27808;
`;
