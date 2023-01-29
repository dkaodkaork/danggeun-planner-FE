//리액트 관련
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//리덕스
import { __putGroupUpdate } from "../../redux/modules/groupSlice";
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

//상수, api
import { IMAGES, PATH } from "../../constants/index";

//컴포넌트
import SubHeader from "../header/SubHeader";
import Input from "../element/Input";
import Textarea from "../element/Textarea";
import TimerButton from "../timer/TimerButton";
import MainHeader from "../header/MainHeader";

const GroupUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const groupDetailData = useSelector((state) => state.group.groupDetail);

  const groupId = groupDetailData?.groupId;

  //글자수 카운터
  let [textareaCount, setTextareaCount] = useState(0);
  let [inputCount, setInputCount] = useState(0);

  //제목, 내용 담기
  const [groupName, setGroupName] = useState(groupDetailData?.groupName);
  const [description, setDescription] = useState(groupDetailData?.description);

  //첫 화면에 글자수 넣어주기
  useEffect(() => {
    setInputCount(groupDetailData?.groupName.length);
    setTextareaCount(groupDetailData?.description.length);
  }, []);

  const onInputHandler = (e) => {
    setGroupName(e.target.value);
    setInputCount(e.target.value.length);
  };

  const onTextareaHandler = (e) => {
    setDescription(e.target.value);
    setTextareaCount(e.target.value.length);
  };

  const onClickGroupUpdate = () => {
    //하나의 객체로 묶어서 보내야 함!
    const groupInfo = { groupName, description };

    if (inputCount === 0) {
      alert("그룹 제목을 입력해주세요");
    } else if (textareaCount === 0) {
      alert("그룹 내용을 입력해주세요");
    } else {
      return dispatch(__putGroupUpdate({ groupInfo, groupId })).then((res) => {
        const groupId = res.payload.groupId;
        navigate(PATH.groupdetail(groupId));
      });
    }
  };

  //그룹 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  return (
    <>
      <MainHeader
        title="Group"
        leftSlot={IMAGES.home}
        leftLink={PATH.timer}
      ></MainHeader>
      <SubHeader
        title="그룹 수정"
        leftSlot={IMAGES.fold}
        leftLink={PATH.groupdetail(groupId)}
      />
      <GroupLayout>
        <AddName>
          <h3>그룹 이름</h3>
          <Input onChange={onInputHandler} maxLength="10" value={groupName} />
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
            value={description}
          ></Textarea>
          <p>
            <span>{textareaCount}</span>
            <span>/50</span>
          </p>
        </Addcontents>
        <StBottom>
          <TimerButton
            width="319px"
            onClick={onClickGroupUpdate}
            disabled={groupName.length === 0 || description.length === 0}
          >
            완 료
          </TimerButton>
          <PageMsg>불쾌감을 주는 문구는 사용하지 말아주세요.</PageMsg>
        </StBottom>
      </GroupLayout>
    </>
  );
};

export default GroupUpdate;

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
