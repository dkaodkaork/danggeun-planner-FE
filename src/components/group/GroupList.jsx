import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../header/Header";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/path.js";

import { __getGroupList } from "../../redux/modules/groupSlice";

//메뉴 오픈 관련
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

const GroupList = () => {
  const dispatch = useDispatch();
  const groupData = useSelector((state) => state.group.groupList);
  //console.log(groupData);

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
        menuName="Group"
        right={IMAGES.menu}
        left={IMAGES.home}
        leftLink={PATH.timer}
        clickMenuHandler={clickGroupMenuHandler}
      ></Header>
      <Header
        fontFamily="MaplestoryOTFBold"
        menuName="그룹 목록"
        height="56px"
        padding="12px 28px 12px 28px "
        fontSize="2.0rem"
        fontWeight="700"
        width="219px"
      />
      <GroupLayout>
        <CardLayout>
          <Link to={PATH.groupadd}>
            <CardBoxAdd>{IMAGES.groupAdd}</CardBoxAdd>
          </Link>
          {[...groupData].reverse()?.map((group) => (
            // {groupData?.map((group) => (
            <div key={group.groupId}>
              <Link to={PATH.groupdetail(group.groupId)}>
                <CardBox>
                  <TopInfo>
                    <GroupName>
                      {group.groupName.length < 7
                        ? group.groupName
                        : group.groupName.slice(0, 6) + "..."}
                    </GroupName>
                    <People>
                      {IMAGES.groupListPeople}
                      <span>{group.participants}</span>
                    </People>
                  </TopInfo>
                  <GroupImg src={group.groupImage} />
                  <p>
                    {group.description.length < 9
                      ? group.description
                      : group.description.slice(0, 8) + "..."}
                  </p>
                </CardBox>
              </Link>
            </div>
          ))}
        </CardLayout>
      </GroupLayout>
    </>
  );
};

export default GroupList;

const GroupLayout = styled.div`
  background-color: #f9f3ea;
  min-height: 722px; //812px에서 헤더 90px을 뺀 값을 줘야 스크롤이 안생김
`;

const CardLayout = styled.div`
  width: 328px;
  margin: 0 auto;
  margin-top: 31px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

const CardBoxAdd = styled.div`
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

const CardBox = styled.div`
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

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GroupImg = styled.img`
  width: 67px;
  margin: 0 auto;
`;

const GroupName = styled.span`
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 16px;
  color: #614925;
`;

const People = styled.div`
  span {
    padding-left: 3px;
    font-family: "Pretendard-Regular";
    font-size: 1.2rem;
    font-weight: 300;
    color: #a4a4a4;
  }
`;
