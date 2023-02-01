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

  //화면크기 인식
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const resizeWidth = () => {
  //   setWindowWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", resizeWidth);
  //   return () => {
  //     window.removeEventListener("resize", resizeWidth);
  //   };
  // }, []);

  //모바일인지 아닌지 확인
  //const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  //   if (isMobile) {
  //     // mobile
  //     setMobile(true);
  //   } else {
  //     // desktop
  //     setMobile(false);
  //   }
  // }, []);

  // console.log(mobile);

  //SSE 설정
  const EventSource = EventSourcePolyfill || NativeEventSource;

  //읽음 설정 관련
  const alarmRead = useSelector((state) => state.alarm.alarmRead);

  //그룹 읽음 데이터 확인
  const alarmIsRead = useSelector((state) => state.alarm.isRead);
  //console.log("서버의 읽음 설정", alarmIsRead);
  //console.log("프론트의 읽음 설정", alarmRead);

  //그룹 읽음 수신
  useEffect(() => {
    dispatch(__getAlarm());
  }, []);

  //sse연결 여부
  const isSSE = localStorage.getItem("sse") === "connect" ? true : false;
  //console.log("isSSE", isSSE);

  //sse 설정 new
  useEffect(() => {
    const AccessToken = localStorage.getItem("accessToken");
    //sse연결에 끊어졌을 때만 받도록 함
    if (!isSSE) {
      const eventSource = new EventSourcePolyfill(
        // `${process.env.REACT_APP_TEST_SERVER}/api/subscribe`,
        `${serverUrl}/subscribe`,
        {
          headers: {
            AccessToken: AccessToken,
            "Content-Type": "text/event-stream",
          },
          withCredentials: true, //무조건 넣어야 함
          heartbeatTimeout: 3600000, //리프레시토큰만큼의 기한
        }
      );

      //sse 연결 처리
      eventSource.onopen = (e) => {
        //console.log(e);
        if (e.status === 200) {
          localStorage.setItem("sse", "connect");
        }
      };

      //sse 받는 처리
      eventSource.onmessage = (e) => {
        //받은 데이터 Json타입으로 형변환 가능여부fn
        //console.log("onmessage", e);
        const isJson = (str) => {
          try {
            const json = JSON.parse(str);
            //console.log("str", str);
            if (!str.includes("EventStream Created.")) {
              dispatch(alarmReadStatus(false));
            }
            return json && typeof json === "object";
          } catch (e) {
            return false;
          }
        };
        if (isJson(e.data)) {
          //알림 리스트 refetch
          //실시간 알림 데이터
          const obj = JSON.parse(e.data);
          //console.log("obj", obj);
        }
      };

      //sse 에러
      eventSource.onerror = (e) => {
        console.log("onerror", e);
        // eventSource.close();
        localStorage.setItem("sse", null);
      };

      // if (!e.data.includes("EventStream Created.")) {
      //   dispatch(alarmReadStatus(true));
    } // 헤더 아이콘 상태 변경
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
            {(!alarmRead || !alarmIsRead) && <div />}
            <button>{IMAGES.menu}</button>
          </StRightSlot>
        </StBox>
      </StContainer>
      <Menu />
      {/* {windowWidth < 500 && !groupMenuOpen ? null : <Menu />} */}
      {/* {mobile && !groupMenuOpen ? null : <Menu />} */}
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
