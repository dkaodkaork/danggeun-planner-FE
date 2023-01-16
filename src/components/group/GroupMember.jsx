import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../header/Header";
import styled from "styled-components";
import { IMAGES } from "../../constants/images.js";
import { PATH } from "../../constants/index";

import Input from "../element/Input";
import Textarea from "../element/Textarea";
import TimerButton from "../timer/TimerButton";
import SlideModal from "../element/SlideModal";

import { __postGroupAdd } from "../../redux/modules/groupSlice";
import {
  groupMemberOpenStatus,
  detailMenuOpenStatus,
} from "../../redux/modules/modalSlice";

const GroupMember = () => {
  const dispatch = useDispatch();

  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const groupMemberOpen = useSelector(
    (state) => state.modalSlice.groupMemberOpen
  );

  const ClickToggle = () => {
    dispatch(groupMemberOpenStatus(!groupMemberOpen));
  };

  return (
    <>
      {!groupMenuOpen ? (
        <SlideModal bottom="-574px" height="662px" toggle={groupMemberOpen}>
          <button onClick={ClickToggle}>토글</button>
        </SlideModal>
      ) : null}
    </>
  );
};

export default GroupMember;
