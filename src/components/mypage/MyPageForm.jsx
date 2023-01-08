import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import moment from "moment";
import { removeCookies } from "../../core/cookieControler";
import { IMAGES } from "../../constants/images";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getUserInfo } from "../../redux/modules/mypageSlice";
//
import useTimer from "../../hooks/useTimer";

const MypageForm = () => {
  //

  // eslint-disable-next-line
  const [time, setTime] = useState(25 * 1000 * 60); // 25분
  const { clearTimer, startTimer, currentTime, isClear, parsedTime } = useTimer(
    () => {
      alert("finish");
    }, // call back
    time
  );

  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.mypage.data);

  const a = moment("2500", "s").format("mm:ss");
  moment("123", "hmm").format("HH:mm");
  // console.log(a);

  // useEffect(() => {
  //   var formatted = moment.utc(currentTime * 1000).format("mm:ss");
  //   setParsedTime(formatted);
  // }, [currentTime]);
  // console.log(parsedTime);

  useEffect(() => {
    // dispatch(__getUserInfo());
  }, [dispatch]);

  const logoutHandler = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      removeCookies("AccessToken");
      navigate("/login");
    }
  };

  return (
    <div>
      <Header menuName="My"></Header>
      <StProfileContainer>
        <StProfileBox>
          <StImg src={IMAGES.test}></StImg>
          <StInfoBox>
            <span>{userInfo.username}</span>
            <span>{userInfo.email}</span>
            <Link to="/profile">
              <button>프로필수정</button>
            </Link>
          </StInfoBox>
        </StProfileBox>
        <StBox>
          <p>누적당근</p> <p>{userInfo.totalCarrot} 개</p>
        </StBox>
      </StProfileContainer>
      <StButtonContainer>
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://www.notion.so/4de1bdd12eda48e79ac2dde2c45d6c8f"
            )
          }
        >
          도움말
        </button>
        <button
          type=" button"
          onClick={() =>
            window.open(
              "https://www.notion.so/4de1bdd12eda48e79ac2dde2c45d6c8f"
            )
          }
        >
          1:1 문의
        </button>
        <button onClick={logoutHandler}>로그아웃</button>
      </StButtonContainer>
      {/* 뽀모도로 타이머  */}
      <StTimer>
        {/* <input value={inputValue} onChange={onChange} /> */}
        <div>{parsedTime || "00:00"}</div>
        {isClear ? (
          <button onClick={() => startTimer(time)}>뽀모도로 시작</button>
        ) : (
          <button onClick={clearTimer}>휴식</button>
        )}
      </StTimer>
    </div>
  );
};

export default MypageForm;

const StProfileContainer = styled.div`
  border: 1px solid black;
  margin: 40px 10px 40px 10px;
`;

const StProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  padding: 20px;
  gap: 15px;

  border-bottom: 1px solid black;
`;

const StImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

const StInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;

  button {
    border: 1px solid black;
  }
`;

const StBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  margin: 20px;

  p {
    text-align: center;
    width: 100px;
  }
`;

const StButtonContainer = styled.div`
  border: 1px solid black;
  margin: 40px 10px 40px 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    border: 1px solid black;
    height: 30px;
  }
`;

const StTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    border: 1px solid black;
    width: 300px;
    height: 50px;
    border-radius: 20px;
    font-size: 1.5rem;
  }

  div {
    border: 1px solid black;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    font-size: 2.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
