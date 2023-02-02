//리액트 관련
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//리덕스
import { __putGroupUpdate } from "../../redux/modules/groupSlice";

//상수, api
import { IMAGES, PATH } from "../../constants/index";

//컴포넌트
import SubHeader from "../header/SubHeader";
import Input from "../element/Input";
import Textarea from "../element/Textarea";
import TimerButton from "../timer/TimerButton";
import MainHeader from "../header/MainHeader";
import { carrotAlert } from "../element/alert";
import GroupModal from "./GroupModal";

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
    setInputCount(groupDetailData?.groupName?.length);
    setTextareaCount(groupDetailData?.description?.length);
  }, []);

  const onInputHandler = (e) => {
    setGroupName(e.target.value);
    setInputCount(e.target.value.length);
  };

  const onTextareaHandler = (e) => {
    setDescription(e.target.value);
    setTextareaCount(e.target.value.length);
  };

  const clickUpdateConfirm = () => {
    const groupInfo = { groupName, description };
    dispatch(__putGroupUpdate({ groupInfo, groupId })).then((res) => {
      if (res?.error?.message === "Rejected") {
        carrotAlert("접근 권한이 없습니다");
        navigate(PATH.grouplist);
      } else {
        const groupId = res?.payload?.groupId;
        navigate(PATH.groupdetail(groupId));
      }
    });
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
            onClick={clickUpdateConfirm}
            disabled={groupName?.length === 0 || description?.length === 0}
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 6.1576vh;
`;

const PageMsg = styled.p`
  margin-top: 24px;
  font-family: "Pretendard-Regular";
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: #f27808;
`;
