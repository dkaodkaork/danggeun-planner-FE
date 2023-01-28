import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "../menu/Menu";

const Header = ({ leftLink, leftSlot, title, rightSlot, onClick }) => {
  return (
    <>
      <StContainer>
        <StBox>
          <StLeftSlot>
            <Link to={leftLink}>{leftSlot}</Link>
          </StLeftSlot>
          <StCenterSlot>{title}</StCenterSlot>
          <StRightSlot onClick={onClick}>{rightSlot}</StRightSlot>
        </StBox>
      </StContainer>
      <Menu />
    </>
  );
};

export default Header;

const StContainer = styled.div`
  width: 375px;
  height: 72px;

  padding: 28px 28px 12px 28px;

  background-color: #f9f3ea;
`;

const StBox = styled.div`
  width: 319px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StLeftSlot = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const StCenterSlot = styled.div`
  width: 219px;
  height: 18px;

  font-family: "MaplestoryOTFLight";
  font-size: 1.4rem;
  line-height: 18px;

  text-align: center;

  color: #595550;
`;

const StRightSlot = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
