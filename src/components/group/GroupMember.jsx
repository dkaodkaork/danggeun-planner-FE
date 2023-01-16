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

import { __postGroupAdd } from "../../redux/modules/groupSlice";

const GroupMember = () => {
  return <></>;
};

export default GroupMember;
