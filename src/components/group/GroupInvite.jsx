//리액트 관련
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

//상수, api
import { IMAGES, PATH } from "../../constants/index";
import {
  __getGroupMemberInvite,
  __postGroupMemberInvite,
} from "../../redux/modules/groupSlice";
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

//컴포넌트
import Input from "../element/Input";
import SubHeader from "../header/SubHeader";
import TimerButton from "../timer/TimerButton";
import ProfileImg from "../element/ProfileImg";
import MainHeader from "../header/MainHeader";

const GroupInvite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //그룹 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  //이름 Input
  const [username, setUsername] = useState("");

  const onInputHandler = (e) => {
    setUsername(e.target.value);
  };

  //더보기 토글
  const [toggle, setToggle] = useState(false);

  const clickToggle = () => {
    setToggle(!toggle);
  };

  //그룹아이디
  const param = useParams();
  const groupId = param.groupId;

  //검색 리스트 초기화
  useEffect(() => {
    setSearchList([]);
  }, []);
  //검색 리스트를 저장할 배열
  const [searchList, setSearchList] = useState([]);

  //검색 시 데이터 불러옴
  const clickSearch = () => {
    if (username === "") {
      alert("닉네임을 입력해주세요");
    } else {
      dispatch(__getGroupMemberInvite({ groupId, username })).then((res) => {
        if (res.payload.members.length === 0) {
          alert("검색된 유저가 없습니다");
        } else {
          setSearchList(res.payload.members);
        }
      });
    }
  };

  //체크박스
  //체크리스트를 저장할 배열
  const [checkedList, setCheckedList] = useState([]);

  //체크하면 checkedListd에 값이 담기고, 체크를 해제하면 값이 사라진다.
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };

  //리스팅 목록에서 제거
  const onRemove = (item) => {
    setCheckedList(checkedList.filter((el) => el !== item));
  };

  //그룹원 초대 완료하기
  const InviteSubmit = () => {
    const inviteList = { username: checkedList };
    console.log("그룹원 초대 완료");
    dispatch(__postGroupMemberInvite({ groupId, inviteList })).then(() => {
      navigate(PATH.groupdetail(groupId));
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
        title="그룹원 추가"
        leftSlot={IMAGES.fold}
        leftLink={PATH.groupdetail(groupId)}
      />
      <GroupLayout>
        <p>검색할 유저 닉네임</p>

        <Search>
          <Input
            placeholder="닉네임을 입력하세요"
            onChange={onInputHandler}
            maxLength="6"
            margin="0"
            width="254px"
            height="55px"
          />
          <button onClick={clickSearch}>{IMAGES.search}</button>
        </Search>
        <Flex>
          <SearchList toggle={toggle}>
            {searchList?.map((item) => (
              <UserLayout key={item.memberId}>
                <User>
                  <ProfileImg src={item.profileImage} />
                  <span>{item.username}</span>
                </User>
                {!item.isMember ? (
                  <CheckLabel htmlfor="checker">
                    <CheckInput
                      type="checkbox"
                      id="checker"
                      value={item.username}
                      onChange={(e) => {
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                      checked={
                        checkedList.includes(item.username) ? true : false
                      }
                    />
                  </CheckLabel>
                ) : (
                  <div>{IMAGES.blockCircle}</div>
                )}
              </UserLayout>
            ))}
          </SearchList>
          <MoreToggle onClick={clickToggle}>
            {!toggle ? (
              <>
                <button>{IMAGES.downArrowS}</button>
                <p>더보기</p>
              </>
            ) : (
              <>
                <button>{IMAGES.upArrowS}</button>
                <p>접기</p>
              </>
            )}
          </MoreToggle>
          {!toggle ? (
            <UserBox>
              {checkedList.map((item) => (
                <div key={item}>
                  <span>{item}</span>
                  <button onClick={() => onRemove(item)}>{IMAGES.xIcon}</button>
                </div>
              ))}
            </UserBox>
          ) : null}
          <StBottom>
            <TimerButton
              onClick={InviteSubmit}
              width="319px"
              disabled={checkedList.length === 0}
            >
              완료
            </TimerButton>
            <PageMsg>그룹 당 최대 99명의 멤버를 추가할 수 있습니다.</PageMsg>
          </StBottom>
        </Flex>
      </GroupLayout>
    </>
  );
};

export default GroupInvite;

//체크박스
const CheckLabel = styled.label`
  user-select: none;
  appearance: none;
  width: 30px;
  height: 30px;
  background-image: url("data:image/svg+xml,%3Csvg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.63 8C19.56 8 22.76 11.2 22.76 15.13C22.76 19.06 19.56 22.26 15.63 22.26C11.7 22.26 8.5 19.05 8.5 15.13C8.5 11.21 11.7 8 15.63 8ZM15.63 7C11.14 7 7.5 10.64 7.5 15.13C7.5 19.62 11.14 23.26 15.63 23.26C20.12 23.26 23.76 19.62 23.76 15.13C23.76 10.64 20.11 7 15.63 7Z' fill='%23A4A4A4'/%3E%3C/svg%3E");
  cursor: pointer;
`;

const CheckInput = styled.input`
  appearance: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.625 7C14.018 7 12.4471 7.47652 11.111 8.36931C9.77485 9.2621 8.73344 10.531 8.11848 12.0157C7.50352 13.5003 7.34262 15.134 7.65612 16.7101C7.96963 18.2862 8.74346 19.7339 9.87976 20.8702C11.0161 22.0065 12.4638 22.7804 14.0399 23.0939C15.616 23.4074 17.2497 23.2465 18.7343 22.6315C20.219 22.0166 21.4879 20.9752 22.3807 19.639C23.2735 18.3029 23.75 16.732 23.75 15.125C23.7475 12.9709 22.8907 10.9057 21.3675 9.38251C19.8443 7.85931 17.7791 7.00249 15.625 7ZM19.4946 13.7023L14.9109 18.0773C14.7943 18.1882 14.6396 18.25 14.4788 18.25C14.3179 18.25 14.1632 18.1882 14.0466 18.0773L11.7554 15.8898C11.6357 15.7751 11.5664 15.6176 11.5627 15.4519C11.559 15.2862 11.6213 15.1258 11.7358 15.0059C11.8503 14.8861 12.0077 14.8166 12.1734 14.8127C12.3392 14.8088 12.4996 14.8709 12.6196 14.9852L14.4788 16.7607L18.6304 12.7977C18.7504 12.6834 18.9109 12.6213 19.0766 12.6252C19.2423 12.6291 19.3997 12.6986 19.5142 12.8184C19.6287 12.9383 19.691 13.0987 19.6873 13.2644C19.6836 13.4301 19.6143 13.5876 19.4946 13.7023Z' fill='%23F27808'/%3E%3C/svg%3E%0A");
  }
`;

const GroupLayout = styled.div`
  background-color: #f9f3ea;
  height: 100%;
  padding: 12px 28px 28px 28px;
  p {
    font-family: "Pretendard-Bold";
    font-size: 1.2rem;
    font-weight: 700;
    color: #595550;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Search = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchList = styled.div`
  width: 292px;
  height: ${(props) => (props.toggle ? "376px" : "190px")};
  overflow: scroll;
`;

const UserLayout = styled.div`
  width: 292px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 30px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-left: 12px;
  span {
    font-family: "Pretendard-Regular";
    color: #595550;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

const UserBox = styled.div`
  margin-top: 25px;
  width: 319px;
  height: 160px;
  background: #f1e5d2;
  border-radius: 12px;
  padding: 26px 46px 26px 46px;
  overflow: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  div {
    margin-top: 14px;
  }
  span {
    font-family: "Pretendard-Regular";
    color: #595550;
    font-weight: 500;
    font-size: 1.4rem;
  }
  button {
    margin-left: 11px;
  }
`;

const MoreToggle = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
`;

const StBottom = styled.div`
  position: fixed;
  bottom: 40px;
`;

const PageMsg = styled.p`
  margin-top: 20px;
  font-family: "Pretendard-Regular";
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: #f27808;
`;
