import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IMAGES, PATH } from "../constants/index";

const Layout = ({ children }) => {
  //화면크기 인식
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [state, setState] = useState(false);
  const resizeWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, []);

  return (
    <LayoutBox>
      {windowWidth < 1200 ? (
        <>
          <StLogoImg>
            <img src={IMAGES.webLogo} />
          </StLogoImg>
          <StMadeby2>
            <img src={IMAGES.members} />
          </StMadeby2>
          <StRabbit>
            <img src={IMAGES.rabbit} />
          </StRabbit>
          <DivLayout2>{children}</DivLayout2>
        </>
      ) : (
        // <DivLayout2>{children}</DivLayout2>
        <>
          <StLogoImg>
            <img src={IMAGES.webLogo} />
          </StLogoImg>
          <StMadeby>
            <img src={IMAGES.members} />
          </StMadeby>
          <StRabbit>
            <img src={IMAGES.rabbit} />
          </StRabbit>
          <StSum url={IMAGES.backEarth} />
          <Box>
            <DeskTopLayout>{children}</DeskTopLayout>
          </Box>
        </>
      )}
    </LayoutBox>
  );
};

export default Layout;

const StLogoImg = styled.div`
  position: fixed;
  top: 7.8125vw;
  left: 7.0313vw;
  img {
    width: 17.1354vw;
  }
`;

const StMadeby = styled.div`
  position: fixed;
  top: 7.8125vw;
  right: 5%;
  img {
    width: 8.4896vw;
  }
`;
const StMadeby2 = styled.div`
  position: fixed;
  top: 7.8125vw;
  right: 5%;
  img {
    width: 15vw;
  }
`;

const StRabbit = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  img {
    width: 35.4375vw;
  }
`;

const LayoutBox = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background: #f9f3ea;
`;

const StSum = styled.div`
  width: 1158px;
  height: 240px;
  position: absolute;
  margin-left: 40%;
  bottom: 0;
  background-image: url(${(props) => props.url});
  /* background-color: aqua; */
`;

// export const LayoutBox2 = styled.div`
//   display: flex;
//   margin: 0 auto;
//   justify-content: center;
//   background: radial-gradient(
//     74.59% 151.97% at 76.76% 29.32%,
//     #787878 0%,
//     #000000 100%
//   );
//   mix-blend-mode: overlay;
// `;

const Box = styled.div`
  display: flex;
  margin-left: 40%;
  justify-content: center;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const DeskTopLayout = styled.div`
  width: 375px;
  height: 100vh;

  position: relative;
  background-color: #f9f3ea;

  display: flex;
  flex-direction: column;
`;
const DivLayout2 = styled.div`
  //핸드폰 화면에 맞춤 처리
  @media screen and (max-width: 420px) {
    width: 100%;
    margin: auto;
    background-color: #000000;
  }
  width: 375px;
  /* min-height: 812px; */
  height: 100vh;
  /* height: auto; */
  position: relative;
  margin-left: 0 auto;
  background-color: #f9f3ea;
  display: flex;
  flex-direction: column;
  z-index: 1;
  /* margin: auto; */
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.4);
`;
