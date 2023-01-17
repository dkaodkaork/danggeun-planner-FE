import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/index";

import moment from "moment";

//모듈 import
import {
  __getGroupDetail,
  __getGroupMember,
} from "../../redux/modules/groupSlice";
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

//컴포넌트 import
import Header from "../header/Header";
import GroupMember from "./GroupMember.jsx";

const GroupDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);
  const groupDetailData = useSelector((state) => state.group.groupDetail);

  const param = useParams();
  const groupId = param.groupId;

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  useEffect(() => {
    dispatch(__getGroupDetail(groupId)).then(() => {
      dispatch(__getGroupMember(groupId));
    });
  }, []);

  //현재 년일 불러오기
  const todayYear = moment().format("YYYY");
  const todayMonth = moment().format("M");

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
        menuName={groupDetailData?.groupName}
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
        <GroupImg src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
        {/* <GroupName>{groupDetailData.groupName}</GroupName> */}
        <GroupInfo>{groupDetailData.description}</GroupInfo>
        <RankBox>
          <RankName>
            {todayYear}년 {todayMonth}월 랭킹
          </RankName>
          {groupDetailData?.ranking?.length !== 0 &&
          groupDetailData?.ranking?.length !== undefined ? (
            <>
              <Gold>
                <span>{groupDetailData?.ranking[0]?.rank}위</span>
                <User>
                  <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
                  <span>{groupDetailData?.ranking[0]?.username}</span>
                </User>
                <CarrotNumber>
                  🥕 {groupDetailData?.ranking[0]?.carrot}
                </CarrotNumber>
              </Gold>
              {groupDetailData?.ranking?.length === 1 ? null : (
                <>
                  <Silver>
                    <span>{groupDetailData?.ranking[1]?.rank}위</span>
                    <SliverUser>
                      <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
                      <span>{groupDetailData?.ranking[1]?.username}</span>
                    </SliverUser>
                    <SilverCarrotNumber>
                      🥕 {groupDetailData?.ranking[1]?.carrot}
                    </SilverCarrotNumber>
                  </Silver>
                  {groupDetailData?.ranking?.length === 2 ? null : (
                    <Silver>
                      <span>{groupDetailData?.ranking[2]?.rank}위</span>
                      <SliverUser>
                        <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
                        <span>{groupDetailData?.ranking[2]?.username}</span>
                      </SliverUser>
                      <SilverCarrotNumber>
                        🥕 {groupDetailData?.ranking[2]?.carrot}
                      </SilverCarrotNumber>
                    </Silver>
                  )}
                </>
              )}
            </>
          ) : (
            <NoGetMsg>아직 당근을 수확한 사람이 없어요🥲</NoGetMsg>
          )}
        </RankBox>
        <MonthlyCarrot>
          우리 그룹에서 이번달에
          <br /> 총 <strong>{groupDetailData?.groupCarrot}개</strong> 당근을
          수확했어요!
        </MonthlyCarrot>
      </GroupLayout>
      <GroupMember />
    </>
  );
};

export default GroupDetail;

const GroupLayout = styled.div`
  background-color: #f9f3ea;
  min-height: 722px; //812px에서 헤더 90px을 뺀 값을 줘야 스크롤이 안생김
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 27px 0 27px;
`;

const GroupImg = styled.img`
  margin-top: 30px;
  width: 67px;
`;

const GroupName = styled.p`
  margin-top: 24px;
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 2.4rem;
  color: #614925;
`;

const GroupInfo = styled.p`
  margin-top: 24px;
  font-family: "MaplestoryOTFLight";
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.24rem;
  color: #614925;
`;

const RankBox = styled.div`
  margin-top: 24px;
  width: 319px;
  //height: 210px;
  border-radius: 12px;
  background: #fffdfa;
  border: 1px solid #f1e5d2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
`;

const RankName = styled.div`
  height: 55px;
  width: 272px;
  border-bottom: 1px solid #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 1.4rem;
  color: #614925;
`;

const NoGetMsg = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "MaplestoryOTFBold";
  font-weight: 700;
  font-size: 1.4rem;
  color: #614925;
`;

const Gold = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 259px;
  height: 40px;
  gap: 14px;
  span {
    font-family: "MaplestoryOTFBold";
    font-weight: 700;
    font-size: 2rem;
    color: #f27808;
  }
  img {
    width: 40px;
  }
`;

const Silver = styled(Gold)`
  height: 30px;
  gap: 17px;
  /* &:last-child {
    margin-bottom: 24px;
  } */
  span {
    font-size: 1.6rem;
    color: #595550;
  }
  img {
    width: 30px;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    color: #595550;
  }
`;

const SliverUser = styled(User)`
  gap: 8px;
  justify-content: flex-start;
`;

const CarrotNumber = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 2rem;
  color: #f27808;
`;

const SilverCarrotNumber = styled(CarrotNumber)`
  font-size: 1.6rem;
`;

const MonthlyCarrot = styled.p`
  margin-top: 24px;
  text-align: center;
  font-family: "MaplestoryOTFLight";
  font-weight: 300;
  font-size: 2rem;
  line-height: 3rem;
  color: #595550;
  strong {
    font-family: "MaplestoryOTFBold";
    font-weight: 700;
    color: #f27808;
  }
`;
