import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "../../constants/index";
import { __putNickname } from "../../redux/modules/mypageSlice";

const NicknameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    username: "",
  });
  const changeNicknameHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ [name]: value });
  };

  const submitNicknameHandler = () => {
    if (userInfo.username === "") {
      alert("닉네임을 입력해주세요!");
    } else {
      return dispatch(__putNickname(userInfo)).then((res) => {
        console.log(res.payload);
        if (res?.payload?.message === "닉네임 변경 성공") {
          navigate(PATH.main);
        }
      });
    }
  };

  return (
    <div>
      <StAddNicknameForm>
        <input
          onChange={changeNicknameHandler}
          type="text"
          name="username"
          placeholder="사용하실 닉네임을 입력해주세요."
          // value={userInfo.nickname}
        ></input>
        <button onClick={submitNicknameHandler}>완료</button>
      </StAddNicknameForm>
    </div>
  );
};

export default NicknameForm;

const StAddNicknameForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
  input {
    margin: 100px auto;
    border: 0.1rem solid black;
    width: 200px;
  }
  button {
    width: 100px;
    height: 30px;
    border: 1px solid black;
  }
`;
