import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/index";

import {
  groupMenuOpenStatus,
  detailMenuOpenStatus,
  groupMemberOpenStatus,
} from "../../redux/modules/modalSlice";

import {
  __deleteGroup,
  __getGroupMember,
  __outGroup,
} from "../../redux/modules/groupSlice.js";

import SlideModal from "../element/SlideModal";
import GroupModal from "./GroupModal";
import GroupDetailBtn from "../element/GroupDetailBtn";

const GroupMember = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const groupMemberGet = useSelector((state) => state.group.groupMemberGet);

  const groupId = groupMemberGet?.groupId;
  const groupName = groupMemberGet?.groupName;

  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const groupMemberOpen = useSelector(
    (state) => state.modalSlice.groupMemberOpen
  );

  const ClickToggle = () => {
    dispatch(groupMemberOpenStatus(!groupMemberOpen));
  };

  //그룹 탈퇴, 수정, 삭제 토글 관리
  const detailMenuOpen = useSelector(
    (state) => state.modalSlice.detailMenuOpen
  );
  const [quitModal, setQuitModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  //클릭 핸들러
  const clickQuitHandler = () => {
    setQuitModal(true);
    dispatch(detailMenuOpenStatus(!detailMenuOpen));
  };

  const clickDeleteHandler = () => {
    setDeleteModal(true);
    dispatch(detailMenuOpenStatus(!detailMenuOpen));
  };

  const clickUpdateHandler = () => {
    setUpdateModal(true);
    dispatch(detailMenuOpenStatus(!detailMenuOpen));
  };

  const clickInviteHandler = () => {
    navigate(PATH.groupinvite(groupId));
  };

  //모달에 전달해주는 확인 기능
  //그룹 삭제
  const clickDeleteConfirm = () => {
    dispatch(__deleteGroup(groupId)).then(() => {
      navigate(PATH.grouplist);
      //dispatch(groupMenuOpenStatus(!groupMenuOpen));
      dispatch(groupMemberOpenStatus(!groupMemberOpen));
    });
  };

  //그룹 수정
  const clickUpdateConfirm = () => {
    navigate(PATH.groupupdate(groupId));
    //dispatch(groupMenuOpenStatus(!groupMenuOpen));
    dispatch(groupMemberOpenStatus(!groupMemberOpen));
  };

  //그룹 탈퇴
  const clickOutConfirm = () => {
    dispatch(__outGroup(groupId)).then(() => {
      navigate(PATH.grouplist);
      dispatch(groupMemberOpenStatus(!groupMemberOpen));
    });
  };

  //모달에 전달해주는 취소 기능
  const clickDeleteCancle = () => {
    setDeleteModal(false);
  };
  const clickUpdateCancle = () => {
    setUpdateModal(false);
  };

  return (
    <>
      {!groupMenuOpen ? (
        <SlideModal
          bottom="-574px"
          height="662px"
          toggle={groupMemberOpen}
          cancleHandler={ClickToggle}
        >
          <GroupMemberLayout>
            <Top>
              {groupMemberOpen ? (
                <button onClick={ClickToggle}>{IMAGES.downArrow}</button>
              ) : (
                <button onClick={ClickToggle}>{IMAGES.upArrow}</button>
              )}
              <h1>그룹원 목록</h1>
              <span>{groupMemberGet.onlineParticipant} 접속중</span>
            </Top>
            <ScrollBox>
              <Member>
                <State>
                  <div />
                  <span>나</span>
                </State>
                {groupMemberGet?.myInfo !== undefined ? (
                  <>
                    <User>
                      <img src={groupMemberGet?.myInfo[0]?.profileImage} />
                      <span>{groupMemberGet?.myInfo[0]?.username}</span>
                    </User>
                    <Carrot>
                      {IMAGES.memberCarrot}{" "}
                      {groupMemberGet?.myInfo[0]?.dailyCarrot}
                    </Carrot>
                  </>
                ) : null}
              </Member>
              {groupMemberGet?.participantList?.map((user) => (
                <Member key={user?.username}>
                  {user?.online ? (
                    <OnlineState>
                      <div />
                      <span>접속중</span>
                    </OnlineState>
                  ) : (
                    <OfflineState>
                      <div />
                      <span>자리비움</span>
                    </OfflineState>
                  )}
                  <User>
                    <img src={user?.profileImage} />
                    <span>{user?.username}</span>
                  </User>
                  <Carrot>
                    {IMAGES.memberCarrot} {user?.dailyCarrot}
                  </Carrot>
                </Member>
              ))}
            </ScrollBox>
            <GroupButton>
              {groupMemberGet?.isAdmin ? (
                <>
                  <GroupDetailBtn onClick={clickUpdateHandler}>
                    그룹수정
                  </GroupDetailBtn>
                  <GroupDetailBtn onClick={clickDeleteHandler}>
                    그룹삭제
                  </GroupDetailBtn>
                  <GroupDetailBtn
                    className="reverse"
                    onClick={clickInviteHandler}
                  >
                    그룹원 추가
                  </GroupDetailBtn>
                </>
              ) : (
                <GroupDetailBtn onClick={clickQuitHandler}>
                  그룹탈퇴
                </GroupDetailBtn>
              )}
            </GroupButton>
          </GroupMemberLayout>
        </SlideModal>
      ) : null}
      {updateModal ? (
        <GroupModal
          groupName={groupName}
          subject="수정"
          onClickConfirm={clickUpdateConfirm}
          onClickCancle={clickUpdateCancle}
        />
      ) : null}
      {deleteModal ? (
        <GroupModal
          groupName={groupName}
          subject="삭제"
          onClickConfirm={clickDeleteConfirm}
          onClickCancle={clickDeleteCancle}
        />
      ) : null}
      {quitModal ? (
        <GroupModal
          groupName={groupName}
          subject="탈퇴"
          onClickConfirm={clickOutConfirm}
        />
      ) : null}
    </>
  );
};

export default GroupMember;

const GroupMemberLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-left: 52px;
    font-weight: 700;
    font-size: 1.6rem;
    color: #595550;
    font-family: "Pretendard-Bold";
  }
  span {
    margin-left: 52px;
    color: #4a8a51;
    font-family: "Pretendard-Regular";
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const ScrollBox = styled.div`
  margin-top: 27px;
  width: 260px;
  height: 488px;
  overflow: scroll;
`;

const Member = styled.div`
  height: 47px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dedede;
  justify-content: space-between;
`;

const State = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 55px;
  padding-left: 12px;
  div {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #f27808;
  }
  span {
    color: #f27808;
    font-family: "Pretendard-Regular";
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const OnlineState = styled(State)`
  div {
    background-color: #4a8a51;
  }
  span {
    color: #4a8a51;
  }
`;

const OfflineState = styled(State)`
  div {
    background-color: #a4a4a4;
  }
  span {
    color: #a4a4a4;
  }
`;

const User = styled(State)`
  width: 116px;
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

const Carrot = styled(State)`
  font-family: "Pretendard-Bold";
  color: #f27808;
  font-weight: 700;
  font-size: 1.4rem;
  justify-content: flex-end;
`;

const GroupButton = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
`;
