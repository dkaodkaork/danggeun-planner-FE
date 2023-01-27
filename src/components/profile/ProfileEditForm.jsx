import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";
import {
  __getUserInfo,
  __putUsername,
  __putProfileImg,
} from "../../redux/modules/mypageSlice";
import styled from "styled-components";

import { PATH, IMAGES } from "../../constants/index";

import Button from "../timer/TimerButton";
import Header from "../header/Header";
import SubHeader from "../header/SubHeader";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileImgInput = useRef();

  useEffect(() => {
    dispatch(__getUserInfo());
  }, [dispatch]);

  const [countUsername, setCountUsername] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const userInfo = useSelector((state) => state.mypage.data);

  const [editUsername, setEditUsername] = useState({ username: "" });

  useEffect(() => {
    setCountUsername(userInfo.username.length);
  }, []);

  useEffect(() => {
    if (countUsername > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [countUsername]);

  // 메뉴 오픈 관련 추후에 반드시 빼야함
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const OpenMenuHanlder = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  //

  const changeUsernameHandler = (e) => {
    setEditUsername({
      [e.target.name]: e.target.value,
    });
    setCountUsername(e.target.value.length);
  };

  const submitHandler = async () => {
    if (editUsername.username === "") {
      navigate(PATH.mypage);
    } else {
      const res = await dispatch(__putUsername(editUsername));
      if (res.payload === "이미 사용 중인 닉네임입니다.") {
        alert(res.payload);
      } else {
        navigate(PATH.mypage);
      }
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
    formData.append("image", e.target.files[0]);
    dispatch(__putProfileImg(formData));
  };

  return (
    <>
      <Header
        leftLink={PATH.timer}
        leftSlot={IMAGES.home}
        title="MY"
        onClick={OpenMenuHanlder}
        rightSlot={IMAGES.menu}
      />
      <SubHeader
        title="프로필 수정하기"
        onClick={() => navigate(-1)}
        leftSlot={IMAGES.fold}
      />
      <StContainer>
        <StEditProfileBody>
          <StProfileImage>
            <label>프로필 이미지</label>
            <StImg
              onClick={profileImgClickHandler}
              src={userInfo.profileImage}
            />
            <input
              style={{ display: "none" }}
              ref={profileImgInput}
              type="file"
              name="file"
              accept="image/*"
              onChange={changeImgHandler}
              onClick={setDefaultClickHandler}
            />
          </StProfileImage>
          <StInputBox>
            <StTitle>닉네임</StTitle>
            <StInput
              name="username"
              type="text"
              defaultValue={
                editUsername.username === ""
                  ? userInfo.username
                  : editUsername.username
              }
              onChange={changeUsernameHandler}
              maxLength="6"
              placeholder="닉네임은 6자리 이하입니다."
              autoFocus
            />
            <StLabel>{countUsername}/6</StLabel>
          </StInputBox>
          <StBotBox>
            <Button onClick={submitHandler} width="319px" disabled={disabled}>
              완 료
            </Button>
            <StBottomText>
              불쾌감을 주는 프로필은 사용하지 말아주세요.
            </StBottomText>
          </StBotBox>
        </StEditProfileBody>
      </StContainer>
    </>
  );
};

export default Profile;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 684px;
`;

const StEditProfileBody = styled.div`
  width: 319px;
  height: 681px;
  margin: 12px 28px;
`;

const StProfileImage = styled.div`
  width: 75px;
  height: 76px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  label {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 130%;

    color: #595550;
  }
`;
const StTitle = styled.label`
  width: 319px;
  height: 16px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 130%;
  text-align: left;
  margin-left: 13px;

  color: #595550;
`;

const StImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
`;

const StInputBox = styled.div`
  width: 319px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const StInput = styled.input`
  padding: 19px;
  width: 319px;

  height: 55px;

  background: #ffffff;

  border: 1px solid #f1e5d2;
  border-radius: 12px;

  ::placeholder {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 17px;
    color: #a4a4a4;
  }
`;

const StLabel = styled.label`
  height: 16px;
  width: 310px;
  margin-right: 5px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 130%;

  text-align: right;

  color: #4a8a51;
`;

const StBottomText = styled.div`
  width: 319px;
  height: 18px;

  text-align: center;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 130%;
  text-align: center;
  color: #f27808;

  margin-top: 20px;
`;

const StBotBox = styled.div`
  position: fixed;
  width: 319px;
  height: 117px;
  bottom: 28px;
`;
