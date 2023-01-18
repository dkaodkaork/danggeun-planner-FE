import React from "react";
import styled from "styled-components";
import Button from "../timer/TimerButton";

const SortingBtnGroup = ({
  onClickGetAllPlan,
  onClickgetPlan,
  onClickgetFocusPlan,
}) => {
  return (
    <StBtnBox>
      <Button
        width="45px"
        height="29px"
        backgroundColor="#F9F3EA"
        color="#595550"
        fontSize="1.2rem"
        children="전체"
        fontFamily="Pretendard"
        padding="0px"
        border=" 1px solid #595550"
        onClick={onClickGetAllPlan}
      />
      <Button
        width="45px"
        height="29px"
        backgroundColor="#F9F3EA"
        color="#4A8A51"
        fontSize="1.2rem"
        children="계획"
        fontFamily="Pretendard"
        padding="0px"
        border=" 1px solid #4A8A51"
        onClick={onClickgetPlan}
      />
      <Button
        width="45px"
        height="29px"
        backgroundColor="#F9F3EA"
        color="#F27808"
        fontSize="1.2rem"
        children="집중"
        fontFamily="Pretendard"
        padding="0px"
        border="1px solid #F27808"
        onClick={onClickgetFocusPlan}
      />
    </StBtnBox>
  );
};

export default SortingBtnGroup;

const StBtnBox = styled.div`
  width: 327px;
  gap: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 14px;
`;
