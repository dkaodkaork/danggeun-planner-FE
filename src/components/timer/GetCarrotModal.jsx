import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { IMAGES } from "../../constants/index";

//Gsap라이브러리 Import
import { gsap } from "gsap";
import { Howl } from "howler";

import TimerButton from "./TimerButton";

const GetCarrotModal = (props) => {
  const carrotRef = useRef();
  const blingRef = useRef();

  const [disabled, setDisabled] = useState(true);

  //당근 애니메이션
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(carrotRef.current, {
      y: -150,
      duration: 0.7,
      ease: "bounce.out",
    });
    tl.to(carrotRef.current, {
      y: 0,
      rotation: 360,
      duration: 1.3,
      scale: 1.5,
      ease: "bounce.out",
    });
    tl.to(carrotRef.current, {
      scale: 1,
    });
  }, []);

  //반짝이 애니메이션
  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(blingRef.current, {
      delay: 1.4,
      rotation: 360,
      yoyo: true,
    });
  }, []);

  //효과음 도전해봤으나 작동안됨
  const sound = new Howl({
    src: ["../../assets/audio/getCarrotAudio.mp3"],
    autoplay: true,
    volume: 1.0,
    onend: () => {
      console.log("Finished!");
    },
  });

  useEffect(() => {
    setTimeout(() => {
      sound.play();
    }, 500);

    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  });

  return (
    <>
      <ModalBox onClick={props.onOpenModal}>
        <CarrotLayout>
          <CarrotEffect ref={blingRef} />
          <CarrotImg ref={carrotRef}>{IMAGES.completeCarrot}</CarrotImg>
        </CarrotLayout>
        <GetMsg disabled={disabled}>당근 1개를 수확했습니다!</GetMsg>
        {!disabled ? (
          <TimerButton width="108px" height="44px" onClick={props.onClick}>
            확인
          </TimerButton>
        ) : null}
      </ModalBox>
    </>
  );
};

export default GetCarrotModal;

const ModalBox = styled.div`
  height: 259px;
  width: 328px;
  border-radius: 12px;
  background: #fffdfa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;

const GetMsg = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => (props.disabled ? "#fff" : "black")};
  overflow: hidden;
`;

const CarrotLayout = styled.div`
  width: 160px;
  height: 110px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarrotEffect = styled.div`
  height: 42px;
  width: 160px;
  position: absolute;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='161' height='44' fill='none'%3E%3Cpath fill='%23F5AD6A' d='M16.534 32.507c-3.024 2.94-4.904 5.502-6.973 9.545-.29.564-1.198.564-1.488 0C6.005 38.009 4.12 35.45 1.1 32.507a.662.662 0 0 1 0-.975c3.024-2.94 4.905-5.502 6.973-9.545.29-.563 1.199-.563 1.488 0 2.069 4.043 3.953 6.602 6.973 9.545a.662.662 0 0 1 0 .975ZM23.15 5.182c-1.236 1.217-2.006 2.277-2.852 3.95-.118.233-.49.233-.609 0-.846-1.673-1.617-2.732-2.852-3.95a.276.276 0 0 1 0-.403c1.237-1.217 2.006-2.277 2.852-3.95.119-.233.49-.233.61 0 .845 1.673 1.616 2.732 2.852 3.95a.276.276 0 0 1 0 .403ZM160.109 37.354c-1.787 1.723-2.898 3.225-4.12 5.595-.171.33-.708.33-.88 0-1.222-2.37-2.335-3.87-4.12-5.595a.386.386 0 0 1 0-.572c1.787-1.723 2.898-3.225 4.12-5.595.172-.33.709-.33.88 0 1.222 2.37 2.335 3.87 4.12 5.595a.386.386 0 0 1 0 .572Z'/%3E%3C/svg%3E");
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
`;

const CarrotImg = styled.div``;
