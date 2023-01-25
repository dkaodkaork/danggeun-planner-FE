//리액트 관련
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

//리덕스
import { __getGroupList } from "../../redux/modules/groupSlice";
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

//상수, api
import { IMAGES, PATH } from "../../constants/index";

//컴포넌트
import Header from "../header/Header";
import SubHeader from "../header/SubHeader";

const GroupList = () => {
  const dispatch = useDispatch();
  const groupData = useSelector((state) => state.group.groupList);

  useEffect(() => {
    dispatch(__getGroupList());
  }, []);

  //메뉴 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  return (
    <>
      <Header
        title="Group"
        leftSlot={IMAGES.home}
        leftLink={PATH.timer}
        rightSlot={IMAGES.menu}
        onClick={clickGroupMenuHandler}
      />
      <SubHeader title="그룹 목록" />
      <StGroupLayout>
        {groupData?.length !== 0 && groupData?.length !== undefined ? (
          <>
            <StCardLayout>
              <Link to={PATH.groupadd}>
                <StCardBoxAdd>{IMAGES.groupAdd}</StCardBoxAdd>
              </Link>
              {[...groupData].reverse()?.map((group) => (
                <div key={group.groupId}>
                  <Link to={PATH.groupdetail(group.groupId)}>
                    <StCardBox>
                      <StTopInfo>
                        <StGroupName>
                          {group.groupName.length < 7
                            ? group.groupName
                            : group.groupName.slice(0, 6) + "..."}
                        </StGroupName>
                        <StPeople>
                          {IMAGES.groupListPeople}
                          <span>{group.participants}</span>
                        </StPeople>
                      </StTopInfo>
                      <StGroupImg src={group.groupImage} />
                      <p>
                        {group.description.length < 9
                          ? group.description
                          : group.description.slice(0, 8) + "..."}
                      </p>
                    </StCardBox>
                  </Link>
                </div>
              ))}
            </StCardLayout>
          </>
        ) : (
          <div>
            <StCardLayout>
              <Link to={PATH.groupadd}>
                <StCardBoxAdd>{IMAGES.groupAdd}</StCardBoxAdd>
              </Link>
            </StCardLayout>
            <StNoGroup>그룹이 없습니다</StNoGroup>
          </div>
        )}
      </StGroupLayout>
    </>
  );
};

export default GroupList;

const StGroupLayout = styled.div`
  background-color: #f9f3ea;
  min-height: 722px; //812px에서 헤더 90px을 뺀 값을 줘야 스크롤이 안생김
  padding: 12px 22px;
`;

const StCardLayout = styled.div`
  margin: 0 auto;
  margin-top: 31px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

const StCardBoxAdd = styled.div`
  width: 159px;
  height: 159px;
  padding: 16px 14px 16px 14px;
  background: #fffdfa;
  border: 1px solid #f1e5d2;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StCardBox = styled.div`
  width: 159px;
  height: 159px;
  padding: 16px 14px 16px 14px;
  background: #fffdfa;
  border: 1px solid #f1e5d2;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  p {
    font-family: "Pretendard-Regular";
    margin: 0 auto;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 130%;
    color: #595550;
  }
`;

const StNoGroup = styled.div`
  text-align: center;
  margin-top: 152px;
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  color: #a4a4a4;
`;

const StTopInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StGroupImg = styled.img`
  width: 67px;
  margin: 0 auto;
`;

const StGroupName = styled.span`
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 16px;
  color: #614925;
`;

const StPeople = styled.div`
  span {
    padding-left: 3px;
    font-family: "Pretendard-Regular";
    font-size: 1.2rem;
    font-weight: 300;
    color: #a4a4a4;
  }
`;
