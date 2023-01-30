import styled from "styled-components";

export const LayoutBox = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background: #f9f3ea;
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

export const Box = styled.div`
  display: flex;
  /* margin: 0 auto; */
  margin-left: 43.4063vw;
  justify-content: center;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.4);
`;
export const BannerLayout = styled.div`
  position: fixed;
  bottom: -80px;
  margin-right: 1000px;
`;

export const DeskTopLayout = styled.div`
  width: 375px;
  /* min-height: 812px; */
  height: 100vh;
  /* height: 812px; */

  position: static;
  background-color: #f9f3ea;

  display: flex;
  flex-direction: column;
`;
export const DivLayout2 = styled.div`
  width: 375px;
  /* min-height: 812px; */
  height: 100vh;
  /* height: auto; */
  position: static;
  margin-left: 0 auto;
  background-color: #f9f3ea;
  display: flex;
  flex-direction: column;
  /* margin: auto; */
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.4);
`;
