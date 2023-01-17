import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../header/Header";
import { PATH, IMAGES } from "../../constants/index";
import {
  __getUserInfo,
  __putUsername,
  __putProfileImg,
} from "../../redux/modules/mypageSlice";
import Button from "../timer/TimerButton";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileImgInput = useRef();

  useEffect(() => {
    dispatch(__getUserInfo());
  }, [dispatch]);

  const [countUsername, setCountUsername] = useState(0);

  const userInfo = useSelector((state) => state.mypage.data);

  const [editUsername, setEditUsername] = useState({
    username: "",
  });

  const changeUsernameHandler = (e) => {
    setEditUsername({
      [e.target.name]: e.target.value,
    });
    setCountUsername(e.target.value.length);
  };

  const submitHandler = () => {
    if (editUsername.username === "") {
      navigate(-1);
    } else {
      dispatch(__putUsername(editUsername));
      navigate(-1);
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
    <StContainer>
      <Header
        menuName="MY"
        right={IMAGES.menu}
        left={IMAGES.home}
        leftLink={PATH.timer}
        fontFamily="Pretendard"
      />
      <Header
        menuName="프로필 수정하기"
        left={IMAGES.fold}
        onClick={() => navigate(-1)}
        height="56px"
        padding="12px 28px 12px 28px "
        fontSize="2.0rem"
        fontWeight="700"
        width="219px"
        marginRight="40px"
      />
      <StEditProfileBody>
        <StProfileImage>
          <label>프로필 이미지</label>
          <StImg onClick={profileImgClickHandler} src={userInfo.profileImage} />
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
        <Button
          onClick={submitHandler}
          backgroundColor="#F27808"
          width="319px"
          marginTop="321px"
        >
          완 료
        </Button>
        <StBottomText>불쾌감을 주는 프로필은 사용하지 말아주세요.</StBottomText>
      </StEditProfileBody>
    </StContainer>
  );
};

export default Profile;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 812px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
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
  /* justify-content: center; */
  gap: 10px;
  align-items: center;

  label {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 130%;
    /* identical to box height, or 16px */

    /* word1 */

    color: #595550;
  }
`;
const StTitle = styled.label`
  width: 319px;
  height: 16px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-align: left;
  margin-left: 13px;

  color: #595550;
`;

const StImg = styled.img`
  border-radius: 50%;
  border: 1px solid black;
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
  font-size: 12px;
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
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-align: center;

  /* 1 */

  color: #f27808;

  margin-top: 20px;
`;
