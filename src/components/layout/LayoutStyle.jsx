import styled from "styled-components";

export const LayoutBox = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background: #1e1e1e;
  /* conic-gradient(
    from 187.75deg at 58.93% 50%,
    #857aff -15.29deg,
    #4a3aff 127.04deg,
    #7b6fff 299.64deg,
    #857aff 344.71deg,
    #4a3aff 487.04deg
  ); */
`;
export const Box = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;
export const BannerLayout = styled.div`
  position: fixed;
  bottom: -80px;
  margin-right: 1000px;
`;

export const DivLayout = styled.div`
  width: 375px;
  min-height: 100vh;
  height: auto;

  position: static;
  background-color: white;

  display: flex;
  flex-direction: column;
`;
export const DivLayout2 = styled.div`
  width: 375px;
  min-height: 100vh;
  height: auto;
  position: static;
  margin-left: 470px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Version = styled.div`
  position: fixed;
  margin-right: 858px;
  bottom: 392px;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;

  color: white;
`;
