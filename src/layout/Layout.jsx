import React, { useEffect, useState } from "react";
import {
  DeskTopLayout,
  LayoutBox,
  BannerLayout,
  Box,
  DivLayout2,
  Version,
} from "./LayoutStyle";

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
        <DivLayout2>{children}</DivLayout2>
      ) : (
        <Box>
          <DeskTopLayout>{children}</DeskTopLayout>
        </Box>
      )}
    </LayoutBox>
  );
};

export default Layout;
