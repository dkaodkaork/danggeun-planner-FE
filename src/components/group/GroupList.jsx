//리액트 관련
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

//리덕스
import { __getGroupList } from "../../redux/modules/groupSlice";

//상수, api
import { IMAGES, PATH } from "../../constants/index";

//컴포넌트
import SubHeader from "../header/SubHeader";
import MainHeader from "../header/MainHeader";

const GroupList = () => {
  const dispatch = useDispatch();
  const groupData = useSelector((state) => state.group.groupList);

  useEffect(() => {
    dispatch(__getGroupList());
  }, []);

  //이모티콘 공백으로 바꿈
  const removeEmojis = (str) => {
    const regex =
      /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    if (regex.test(str)) {
      return str.replace(regex, "");
    } else {
      return str;
    }
  };

  //이모티콘 체크하고 반환
  const checkEmojis = (str) => {
    const regex =
      /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return regex.test(str);
  };

  const nameCon = (str) => {
    if (str.length < 7) {
      return str;
    } else if (checkEmojis(str)) {
      const first = str.slice(0, 5);
      const aa = str.slice(5, 8);
      const strSliceRemove = removeEmojis(aa);
      return first + strSliceRemove + "...";
    } else {
      return str.slice(0, 6) + "...";
    }
  };

  const descriptionCon = (str) => {
    if (str.length < 9) {
      return str;
    } else if (checkEmojis(str)) {
      const first = str.slice(0, 7);
      const aa = str.slice(7, 12);
      const strSliceRemove = removeEmojis(aa);
      return first + strSliceRemove + "...";
    } else {
      return str.slice(0, 8) + "...";
    }
  };

  return (
    <>
      <MainHeader title="Group" leftSlot={IMAGES.home} leftLink={PATH.timer} />
      <SubHeader title="그룹 목록" />
      <StGroupLayout>
        {groupData?.length !== 0 && groupData?.length !== undefined ? (
          <>
            <StCardDragLayout>
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
                            {nameCon(group.groupName)}
                            {/* {group.groupName.length < 7
                              ? group.groupName
                              : group.groupName.slice(0, 6) + "..."} */}
                          </StGroupName>
                          <StPeople>
                            {IMAGES.groupListPeople}
                            <span>{group.participants}</span>
                          </StPeople>
                        </StTopInfo>
                        <StGroupImg src={group.groupImage} />
                        <p>
                          {descriptionCon(group.description)}
                          {/* {group.description.length < 9
                            ? group.description
                            : group.description.slice(0, 8) + "..."} */}
                        </p>
                      </StCardBox>
                    </Link>
                  </div>
                ))}
              </StCardLayout>
            </StCardDragLayout>
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
  height: 100%;
  padding: 12px 22px;
  width: 100%;
`;

const StCardDragLayout = styled.div`
  height: 79.3103vh;
  overflow-y: scroll;
  width: 314px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const StCardLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
`;

const StCardBoxAdd = styled.div`
  width: 153px;
  height: 153px;
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
  width: 153px;
  height: 153px;
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
