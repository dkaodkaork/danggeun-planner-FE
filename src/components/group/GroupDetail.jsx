import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";

import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

const GroupDetail = () => {
  const dispatch = useDispatch();
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
        clickMenuHandler={clickGroupMenuHandler}
      ></Header>
      <GroupLayout>
        <GroupImg src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
        <GroupName>당그니즈</GroupName>
        <GroupInfo>
          아이엠그룹 아이엠그룹 아이엠그룹 아이엠그룹 아이엠그룹 아이엠그룹
          아이엠그룹 아이엠그룹 아이엠그룹 아이엠그룹
        </GroupInfo>
        <RankBox>
          <RankName>2023년 1월 랭킹</RankName>
          <Gold>
            <span>1위</span>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>짱멋진토깽이</span>
            </User>
            <CarrotNumber>🥕 10</CarrotNumber>
          </Gold>
          <Silver>
            <span>1위</span>
            <SliverUser>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>짱멋진토깽이</span>
            </SliverUser>
            <SilverCarrotNumber>🥕 10</SilverCarrotNumber>
          </Silver>
          <Silver>
            <span>1위</span>
            <SliverUser>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>짱멋진토깽이</span>
            </SliverUser>
            <SilverCarrotNumber>🥕 10</SilverCarrotNumber>
          </Silver>
        </RankBox>
        <MonthlyCarrot>
          우리 그룹에서 이번달에
          <br /> 총 <strong>50개</strong> 당근을 수확했어요!
        </MonthlyCarrot>
      </GroupLayout>
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
  &:last-child {
    margin-bottom: 24px;
  }
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
