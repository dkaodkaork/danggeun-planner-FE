import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "../../constants/index";
import { __putNickname } from "../../redux/modules/mypageSlice";
import Header from "../header/Header";
import Button from "../timer/TimerButton";

const NicknameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [countNickname, setCountNickname] = useState(0);

  const [userInfo, setUserInfo] = useState({
    username: "",
  });
  const changeNicknameHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ [name]: value });
    setCountNickname(e.target.value.length);
  };

  const submitNicknameHandler = () => {
    if (userInfo.username === "") {
      alert("닉네임을 입력해주세요!");
    } else {
      return dispatch(__putNickname(userInfo)).then((res) => {
        console.log(res.pay);
        if (res?.payload?.message === "닉네임 변경 성공") {
          navigate(PATH.main);
        }
      });
    }
  };

  return (
    <StContainer>
      <Header menuName="SIGN UP" justifyContent="center"></Header>
      <StDiv>
        <div>프로필 만들기</div>
      </StDiv>
      <StInputBox>
        <StTitle>닉네임</StTitle>
        <StInput
          name="username"
          type="text"
          // value={loginInfo.email}
          onChange={changeNicknameHandler}
          maxLength="6"
          placeholder="닉네임은 6자리 이하입니다."
        />
        <StLabel>{countNickname}/6</StLabel>
      </StInputBox>
      <Button
        onClick={submitNicknameHandler}
        backgroundColor="#A4A4A4"
        width="319px"
        marginTop="421px"
      >
        완료
      </Button>
      <StBottomText>
        닉네임은 추후 마이페이지에서 수정할 수 있습니다.
      </StBottomText>
    </StContainer>
  );
};

export default NicknameForm;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;
  div {
    width: 219px;
    height: 32px;

    font-family: "MaplestoryOTFBold";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    /* word */

    color: #595550;
  }
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

const StTitle = styled.label`
  width: 319px;
  height: 16px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-align: left;
  margin-left: 10px;

  color: #595550;
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
  text-decoration-line: underline;

  /* 1 */

  color: #f27808;

  margin-top: 20px;
`;
