import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { __putUsername } from "../../../redux/modules/mypageSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PATH } from "../../../constants/index";
import { carrotAlert } from "../../element/alert";

import Button from "../../timer/TimerButton";
import SubHeader from "../../header/SubHeader";
import InputBox from "./InputBox";
import AuthHeader from "../AtuhHeader";

const UsernameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [countUsername, setCountUsername] = useState(0);

  //버튼 활성화
  const [disabled, setDisabled] = useState(true);

  const [userInfo, setUserInfo] = useState({
    username: "",
  });

  const changeUsernameHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ [name]: value });
    setCountUsername(e.target.value.length);
  };

  useEffect(() => {
    if (countUsername > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [countUsername]);

  const submitUsernameHandler = () => {
    dispatch(__putUsername(userInfo)).then((res) => {
      if (res?.payload?.message === "닉네임 변경 성공") {
        navigate(PATH.timer);
      } else {
        carrotAlert(res.payload);
      }
    });
  };

  return (
    <StContainer>
      <AuthHeader title="SIGN UP" />
      <SubHeader title="프로필 만들기" />
      <InputBox
        title="닉네임"
        name="username"
        type="text"
        onChange={changeUsernameHandler}
        maxLength="6"
        placeholder="닉네임은 6자리 이하입니다."
        contents={countUsername}
        totalCount="/6"
        textAlign="right"
        margin="20px 0px 0px 0px"
      />
      <StBotBox>
        <Button
          onClick={submitUsernameHandler}
          width="319px"
          disabled={disabled}
        >
          완료
        </Button>
      </StBotBox>
    </StContainer>
  );
};

export default UsernameForm;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StBotBox = styled.div`
  margin-top: 50px;
`;
