import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";

import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

const GroupMenu = () => {
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);
  const dispatch = useDispatch();

  const [isMatster, setIsMaster] = useState(false);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  return (
    <ModalBackdrop toggle={groupMenuOpen}>
      <MenuLayout toggle={groupMenuOpen}>
        <MenuIcon>
          <button onClick={clickGroupMenuHandler}>{IMAGES.nextArrow}</button>
          {isMatster ? <button>{IMAGES.inviteIcon}</button> : null}
        </MenuIcon>
        <Top>
          <h1>멤버 보기</h1>
          <span>(4/30 접속중)</span>
        </Top>
        <ScrollBox>
          <Member>
            <State>
              <div />
              <span>부재중</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽이</span>
            </User>
            <Carrot>🥕 100</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>나</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽</span>
            </User>
            <Carrot>🥕 10</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>부재중</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽이</span>
            </User>
            <Carrot>🥕 100</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>나</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽</span>
            </User>
            <Carrot>🥕 10</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>부재중</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽이</span>
            </User>
            <Carrot>🥕 100</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>나</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽</span>
            </User>
            <Carrot>🥕 10</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>부재중</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽이</span>
            </User>
            <Carrot>🥕 100</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>나</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽</span>
            </User>
            <Carrot>🥕 10</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>부재중</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽이</span>
            </User>
            <Carrot>🥕 100</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>나</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽</span>
            </User>
            <Carrot>🥕 10</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>부재중</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽이</span>
            </User>
            <Carrot>🥕 100</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>나</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽</span>
            </User>
            <Carrot>🥕 10</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>부재중</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽이</span>
            </User>
            <Carrot>🥕 100</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>나</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽</span>
            </User>
            <Carrot>🥕 10</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>부재중</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽이</span>
            </User>
            <Carrot>🥕 100</Carrot>
          </Member>
          <Member>
            <State>
              <div />
              <span>나</span>
            </State>
            <User>
              <img src="https://velog.velcdn.com/images/posinity/post/d98edda0-adc8-45ae-a97f-8e9316d70199/image.png" />
              <span>노력한토깽</span>
            </User>
            <Carrot>🥕 10</Carrot>
          </Member>
        </ScrollBox>
        <DownArrow>{IMAGES.downArrow}</DownArrow>
        <GroupButton>
          {isMatster ? (
            <>
              <button>그룹수정</button>
              <button>그룹삭제</button>
            </>
          ) : (
            <button>그룹탈퇴</button>
          )}
        </GroupButton>
      </MenuLayout>
    </ModalBackdrop>
  );
};

export default GroupMenu;

const ModalBackdrop = styled.div`
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in;
`;

const MenuLayout = styled.div`
  width: 298px;
  background-color: #fffdfa;
  position: fixed;
  right: ${(props) => (props.toggle ? "0" : "-300px")};
  height: 100%;
  transition: all 0.5s ease-in;
  padding: 39px 27px 25px 27px;
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Top = styled.div`
  margin-top: 37px;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 15px;
  h1 {
    font-family: "MaplestoryOTFBold";
    font-weight: 700;
    font-size: 2rem;
    color: #595550;
  }
  span {
    color: #595550;
    font-family: "Pretendard-Regular";
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const ScrollBox = styled.div`
  margin-top: 26px;
  height: 494px;
  overflow: scroll;
`;

const Member = styled.div`
  height: 47px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dedede;
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

const User = styled(State)`
  width: 116px;
  img {
    width: 20px;
  }
  span {
    font-family: "Pretendard-Bold";
    color: #595550;
    font-weight: 700;
    font-size: 1.4rem;
  }
`;

const Carrot = styled(State)`
  font-family: "Pretendard-Bold";
  color: #f27808;
  font-weight: 700;
  font-size: 1.4rem;
`;

const DownArrow = styled.div`
  margin-top: 33px;
  display: flex;
  justify-content: center;
`;

const GroupButton = styled.div`
  margin-top: 31px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  button {
    width: 112px;
    height: 30px;
    background: #f9f3ea;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }
`;
