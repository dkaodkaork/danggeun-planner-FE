import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";

//리덕스
import { groupMenuOpenStatus } from "../../redux/modules/modalSlice";
import { alarmReadStatus, __getAlarm } from "../../redux/modules/alarmSlice";

//상수, api
import { IMAGES } from "../../constants/index";
import { serverUrl } from "../../core";

//컴포넌트
import Menu from "../menu/Menu";

const MainHeader = ({ leftLink, leftSlot, title }) => {
  const dispatch = useDispatch();

  //메뉴 오픈 관련
  const groupMenuOpen = useSelector((state) => state.modalSlice.groupMenuOpen);

  const clickGroupMenuHandler = () => {
    dispatch(groupMenuOpenStatus(!groupMenuOpen));
  };

  //SSE 설정
  const EventSource = EventSourcePolyfill || NativeEventSource;

  //읽음 설정 관련
  const alarmRead = useSelector((state) => state.alarm.alarmRead);

  //그룹 읽음 데이터 확인
  const alarmIsRead = useSelector((state) => state.alarm.isRead);
  //console.log("헤더에서", alarmIsRead);

  //그룹 읽음 수신
  useEffect(() => {
    dispatch(__getAlarm());
  }, []);

  //sse 설정 new
  useEffect(() => {
    const AccessToken = localStorage.getItem("accessToken");
    if (AccessToken) {
      const eventSource = new EventSource(
        // `${process.env.REACT_APP_TEST_SERVER}/api/subscribe`,
        `${serverUrl}/subscribe`,
        {
          headers: {
            AccessToken,
          },
          withCredentials: true, //무조건 넣어야 함
          heartbeatTimeout: 150000, //리프레시토큰만큼의 기한
        }
      );
      /* EVENTSOURCE ONMESSAGE ---------------------------------------------------- */
      eventSource.onmessage = (e) => {
        if (!e.data.includes("EventStream Created.")) {
          dispatch(alarmReadStatus(true));
        } // 헤더 아이콘 상태 변경
      };
    }
  }, []);

  //sse 설정
  // useEffect(() => {
  //   const fetchSse = async () => {
  //     try {
  //       const eventSource = new EventSource(
  //         `${process.env.REACT_APP_TEST_SERVER}/api/subscribe`,
  //         {
  //           headers: {
  //             AccessToken: localStorage.getItem("accessToken"),
  //           },
  //           withCredentials: true, //무조건 넣어야 함
  //           heartbeatTimeout: 3600000, //리프레시토큰만큼의 기한 //이기간동안 클라이언트가 응답하지 않으면 서버가 연결을 닫음
  //         }
  //       );
  //       //console.log("hihi");
  //       /* EVENTSOURCE ONMESSAGE ---------------------------------------------------- */
  //       eventSource.onmessage = async (e) => {
  //         //console.log("byebye");
  //         console.log(e);
  //         const res = await e.data;
  //         if (!res.includes("EventStream Created.")) {
  //           dispatch(alarmReadStatus(true));
  //         } // 헤더 아이콘 상태 변경
  //       };

  //       /* EVENTSOURCE ONERROR ------------------------------------------------------ */
  //       eventSource.onerror = async (event) => {
  //         console.log(event);
  //         //eventSource.close();
  //         // if (!event.error.message.includes("No activity"))
  //         //   eventSource.close();
  //       };
  //     } catch (error) {}
  //   };
  //   fetchSse();
  //   // return () => eventSource.close();
  // }, []);

  return (
    <>
      <StContainer>
        <StBox>
          <StLeftSlot>
            <Link to={leftLink}>{leftSlot}</Link>
          </StLeftSlot>
          <StCenterSlot>{title}</StCenterSlot>
          <StRightSlot onClick={clickGroupMenuHandler}>
            {(alarmRead || !alarmIsRead) && <div />}
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
  height: 72px;

  padding: 28px 28px 12px 28px;

  background-color: #f9f3ea;
`;

const StBox = styled.div`
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
