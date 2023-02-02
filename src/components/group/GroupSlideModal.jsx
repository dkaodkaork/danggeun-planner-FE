import React from "react";
import styled from "styled-components";

const GroupSlideModal = ({
  children,
  bottom,
  height,
  toggle,
  cancleHandler,
}) => {
  return (
    <>
      <ModalBackdrop toggle={toggle} onClick={cancleHandler} />
      <MenuLayout bottom={bottom} height={height} toggle={toggle}>
        {children}
      </MenuLayout>
    </>
  );
};

export default GroupSlideModal;

const ModalBackdrop = styled.div`
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
`;

const MenuLayout = styled.div`
  width: 100%;
  background-color: #fffdfa;
  position: absolute;
  bottom: 0;
  /* ${(props) => (props.toggle ? "500px" : props.bottom)}; */
  height: ${(props) => (props.toggle ? props.height : "10.8374vh")};
  transition: all 0.3s;
  padding: 28px;
  border-radius: 12px 12px 0px 0px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
`;
