import styled from "styled-components";
import Modal from "../element/Modal";
import Button from "../timer/TimerButton";

const ConfirmModal = ({ img, onClick }) => {
  return (
    <>
      <Modal>
        <StImg src={img} />
        <StConfirmMsg>계획을 삭제하시겠습니까?</StConfirmMsg>

        <StBtnBox>
          <Button
            width="100px"
            height="40px"
            backgroundColor="#F9F3EA"
            color="#F27808"
            fontSize="1.6rem"
            border="1px solid #F27808"
          >
            아니요
          </Button>
          <Button
            width="100px"
            height="40px"
            fontSize="1.6rem"
            onClick={onClick}
          >
            네
          </Button>
        </StBtnBox>
      </Modal>
    </>
  );
};

export default ConfirmModal;

const StImg = styled.img`
  width: 67px;
  height: 67px;
  border-radius: 100%;
`;

const StConfirmMsg = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  font-weight: 500;
  color: #595550;
`;

const StBtnBox = styled.p`
  display: flex;
  gap: 14px;
`;
