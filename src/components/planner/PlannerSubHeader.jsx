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
  margin: 0px 32px 0px 29px;
  height: 56px;
`;
