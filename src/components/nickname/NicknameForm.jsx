import React, { useState } from "react";
import styled from "styled-components";

const NicknameForm = () => {
  const [userInfo, setUserInfo] = useState({
    nickname: "",
  });
  const changeNicknameHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ [name]: value });
  };

  const submitNicknameHandler = () => {
    if (userInfo.nickname === "") {
      alert("닉네임을 입력해주세요");
    }
  };

  <div>
    <div>
      <input type="text" name="nickname" value={userInfo.nickname}></input>
      <button>완료</button>
    </div>
  </div>;
};
