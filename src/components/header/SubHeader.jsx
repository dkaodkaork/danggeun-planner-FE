import { Link } from "react-router-dom";
import styled from "styled-components";

const SubHeader = ({
  leftLink,
  leftSlot,
  title,
  onClick,
  rightLink,
  rightSlot,
}) => {
  return (
    <StContainer>
      <StBox>
        <StLeftSlot onClick={onClick}>
          <Link to={leftLink}>{leftSlot}</Link>
        </StLeftSlot>
        <StCenterSlot>{title}</StCenterSlot>
        <StRightSlot>
          <Link to={rightLink}>{rightSlot}</Link>
        </StRightSlot>
      </StBox>
    </StContainer>
  );
};

export default SubHeader;

const StContainer = styled.div`
  height: 56px;
  background-color: #f9f3ea;
  padding: 12px 28px 12px 28px;
  border: none;
`;

const StBox = styled.div`
  height: 32px;
  /* border: 1px solid black; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StLeftSlot = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  /* border: 1px solid black; */
`;

const StCenterSlot = styled.div`
  width: 219px;
  height: 18px;
  font-family: "MaplestoryOTFBold";
  font-size: 2rem;
  line-height: 18px;
  text-align: center;
  color: #595550;
`;

const StRightSlot = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  /* border: 1px solid black; */
`;
