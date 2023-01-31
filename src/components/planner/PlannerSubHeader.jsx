import styled from "styled-components";
import UsernameCard from "./UsernameCard";
import { Link } from "react-router-dom";
import { PATH, IMAGES } from "../../constants/index";

const PlannerSubHeader = ({ username, profileImage, param }) => {
  return (
    <StDiv>
      <UsernameCard
        link={PATH.mypage}
        username={username}
        profileImage={profileImage}
      />
      <Link to={PATH.calendar(param)}>{IMAGES.calendarIcon}</Link>
    </StDiv>
  );
};

export default PlannerSubHeader;

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 28px 12px 28px;

  height: 56px;

  background-color: #f9f3ea;
  border: none;
`;
