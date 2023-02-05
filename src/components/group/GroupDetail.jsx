//리액트 관련
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

//리덕스
import {
  __getGroupDetail,
  __getGroupMember,
} from "../../redux/modules/groupSlice";
import { groupMemberOpenStatus } from "../../redux/modules/modalSlice";

//상수, api
import { IMAGES, PATH } from "../../constants/index";

//라이브러리
import moment from "moment";

//컴포넌트
import SubHeader from "../header/SubHeader";
import GroupMember from "./GroupMember.jsx";
import ProfileImg from "../element/ProfileImg.jsx";
import MainHeader from "../header/MainHeader";

const GroupDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const groupDetailData = useSelector((state) => state.group.groupDetail);

  const param = useParams();
  const groupId = param.groupId;

  useEffect(() => {
    dispatch(__getGroupDetail(groupId)).then((res) => {
      if (res?.error?.message === "Rejected") {
        navigate(PATH.error);
      }
      dispatch(__getGroupMember(groupId));
    });
    return () => {
      dispatch(groupMemberOpenStatus(false));
    };
  }, []);

  //현재 년일 불러오기
  const todayYear = moment().format("YYYY");
  const todayMonth = moment().format("M");

  //console.log(groupDetailData);

  return (
    <>
      <MainHeader
        title="Group"
        leftSlot={IMAGES.home}
        leftLink={PATH.timer}
      ></MainHeader>
      <SubHeader
        title={groupDetailData?.groupName}
        leftSlot={IMAGES.fold}
        leftLink={PATH.grouplist}
      />
      <GroupLayout>
        <GroupImg src={groupDetailData?.groupImage} alt="그룹 이미지" />
        <GroupInfo>{groupDetailData?.description}</GroupInfo>
        <RankBox>
          <RankName>
            {todayYear}년 <strong> {todayMonth}월</strong> 랭킹
          </RankName>
          {groupDetailData?.ranking?.length !== 0 &&
          groupDetailData?.ranking?.length !== undefined ? (
            <>
              <Gold>
                <img src={IMAGES.goldPng} alt="금상" />
                <User>
                  <ProfileImg
                    src={groupDetailData?.ranking[0]?.profileImage}
                    alt="프로필 이미지"
                  />
                  <span>{groupDetailData?.ranking[0]?.username}</span>
                </User>
                <CarrotNumber>
                  {IMAGES.memberCarrot} {groupDetailData?.ranking[0]?.carrot}
                </CarrotNumber>
              </Gold>
              {groupDetailData?.ranking?.length === 1 ? null : (
                <>
                  <Gold>
                    <img src={IMAGES.silverPng} alt="은상" />
                    <User>
                      <ProfileImg
                        src={groupDetailData?.ranking[1]?.profileImage}
                        alt="프로필 이미지"
                      />
                      <span>{groupDetailData?.ranking[1]?.username}</span>
                    </User>
                    <CarrotNumber>
                      {IMAGES.memberCarrot}{" "}
                      {groupDetailData?.ranking[1]?.carrot}
                    </CarrotNumber>
                  </Gold>
                  {groupDetailData?.ranking?.length === 2 ? null : (
                    <Gold>
                      <img src={IMAGES.bronzePng} alt="동상" />
                      <User>
                        <ProfileImg
                          src={groupDetailData?.ranking[2]?.profileImage}
                          alt="프로필 이미지"
                        />
                        <span>{groupDetailData?.ranking[2]?.username}</span>
                      </User>
                      <CarrotNumber>
                        {IMAGES.memberCarrot}{" "}
                        {groupDetailData?.ranking[2]?.carrot}
                      </CarrotNumber>
                    </Gold>
                  )}
                </>
              )}
            </>
          ) : (
            <NoGetMsg>아직 당근을 수확한 사람이 없어요&#128531;</NoGetMsg>
          )}
        </RankBox>
        <MonthlyCarrot>
          우리 그룹은 오늘{" "}
          <strong>{groupDetailData?.groupDailyCarrot}개</strong> 당근을
          수확했어요!
          <br />
          우리 그룹은 이번달 <strong>
            {groupDetailData?.groupCarrot}개
          </strong>{" "}
          당근을 수확했어요!
        </MonthlyCarrot>
      </GroupLayout>
      <GroupMember />
    </>
  );
};

export default GroupDetail;

const GroupLayout = styled.div`
  background-color: #f9f3ea;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 27px 0 27px;
`;

const GroupImg = styled.img`
  margin-top: 12px;
  width: 67px;
  height: 67px;
`;

const GroupInfo = styled.p`
  margin-top: 24px;
  font-family: "Pretendard-Bold";
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.56rem;
  color: #595550;
  text-align: center;
  word-wrap: break-word;
  word-break: break-all;
`;

const RankBox = styled.div`
  margin-top: 24px;
  width: 319px;
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
  font-family: "Pretendard-Bold";
  font-weight: 700;
  font-size: 1.6rem;
  color: #595550;
  strong {
    padding: 0 5px;
    color: #f27808;
  }
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
  justify-content: space-between;
  align-items: center;
  width: 259px;
  height: 40px;
  gap: 14px;
  img {
    width: 30px;
    height: 38px;
  }
  span {
    font-family: "Pretendard-Regular";
    font-weight: 500;
    font-size: 1.4rem;
    color: #595550;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 115px;
`;

const CarrotNumber = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 2rem;
  color: #f27808;
  width: 55px;
  text-align: right;
`;

const MonthlyCarrot = styled.p`
  margin-top: 24px;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.8rem;
  color: #595550;
  strong {
    font-family: "Pretendard-Bold";
    font-weight: 700;
    font-size: 1.6rem;
    color: #f27808;
  }
`;
