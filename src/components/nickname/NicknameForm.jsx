import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { IMAGES } from "../../constants/images";
import { __putNickname } from "../../redux/modules/mypageSlice";

const NicknameForm = () => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    username: "",
  });
  const changeNicknameHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ [name]: value });
  };

  const submitNicknameHandler = () => {
    if (userInfo.username === "") {
      alert("닉네임을 입력해주세요");
    } else {
      dispatch(__putNickname(userInfo));
    }
  };

  return (
    <div>
      <StAddNicknameForm>
        {IMAGES.test1}
        {/* <img
          style={{ width: "100px", height: "100px" }}
          src={IMAGES.test}
        ></img> */}
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
