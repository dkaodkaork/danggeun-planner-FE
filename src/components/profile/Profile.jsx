import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../header/Header";
import {
  __getUserInfo,
  __putNickname,
  __putProfileImg,
} from "../../redux/modules/mypageSlice";
import { IMAGES } from "../../constants/images";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileImgInput = useRef();

  useEffect(() => {
    // dispatch(__getUserInfo());
  }, [dispatch]);

  const userInfo = useSelector((state) => state.mypage.data);

  const [editUsername, setEditUsername] = useState({
    username: userInfo.username,
  });

  const changeUsernameHandler = (e) => {
    setEditUsername({
      [e.target.name]: e.target.value,
    });
  };
  console.log(editUsername);

  const submitHandler = () => {
    if (editUsername.username === "") alert("닉네임을 입력해주세요!");
    else {
      // dispatch(__putNickname(editUsername));
      navigate("/mypage");
    }
  };

  const profileImgClickHandler = (e) => {
    e.preventDefault();
    profileImgInput.current.click();
  };

  const setDefaultClickHandler = (e) => {
    e.target.value = null;
  };

  const changeImgHandler = (e) => {
    const formData = new FormData();
    formData.append("multipartFile", e.target.files[0]);
    // dispatch(__putProfileImg(formData));
  };

  return (
    <div>
      <Header menuName="프로필 변경"></Header>

      <StImgContainer>
        <StTitle>프로필</StTitle>
        <StImg onClick={profileImgClickHandler} src={IMAGES.test}></StImg>

        <input
          style={{ display: "none" }}
          ref={profileImgInput}
          type="file"
          name="file"
          accept="image/*"
          onChange={changeImgHandler}
          onClick={setDefaultClickHandler}
        ></input>
        <StInputForm>
          <label>닉네임</label>
          <StInput
            name="username"
            defaultValue={editUsername.username}
            onChange={changeUsernameHandler}
            autoFocus
          />
        </StInputForm>
        <StButton onClick={submitHandler}>완료</StButton>
      </StImgContainer>
    </div>
  );
};

const StImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-bottom: 50px;
`;
const StTitle = styled.div`
  margin-top: 70px;
  font-size: 2rem;
`;

const StImg = styled.img`
  border-radius: 50%;
  border: 1px solid black;
  object-fit: cover;
  width: 150px;
  height: 150px;
`;

const StInputForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 1.3rem;
`;
const StInput = styled.input`
  width: 70%;
  height: 30px;
  font-size: 1.5rem;
  border: none;
  outline: none;
  border-bottom: 0.2rem solid #e4e2e2;
`;

const StButton = styled.button`
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 20px;
  width: 300px;
  height: 50px;
  font-size: 1.5rem;
`;

export default Profile;
