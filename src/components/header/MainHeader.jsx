import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

//리덕스
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";

//상수, api
import { IMAGES } from "../../constants/index";

//컴포넌트
import Menu from "../menu/Menu";

const MainHeader = ({ leftLink, leftSlot, title }) => {
  const dispatch = useDispatch();

  //메뉴 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };
  return (
    <>
      <StContainer>
        <StBox>
          <StLeftSlot>
            <Link to={leftLink}>{leftSlot}</Link>
          </StLeftSlot>
          <StCenterSlot>{title}</StCenterSlot>
          <StRightSlot onClick={clickGroupMenuHandler}>
            <div />
            <button>{IMAGES.menu}</button>
          </StRightSlot>
        </StBox>
      </StContainer>
      <Menu />
    </>
  );
};

export default MainHeader;

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
  position: relative;
  cursor: pointer;

  div {
    position: absolute;
    width: 10px;
    height: 10px;
    right: 0px;
    top: 2px;
    border-radius: 50%;
    background-color: #f27808;
  }
  button: {
    width: 32px;
    height: 32px;
  }
`;
