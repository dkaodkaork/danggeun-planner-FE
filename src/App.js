import React, { useEffect } from "react";

import Router from "./shared/Router";
import GlobalStyle from "./shared/globalStyle";
import Layout from "./layout/Layout";
import HelmetComponent from "./shared/HelmetComponent";

function App() {
  //모바일 스크롤 문제 해결
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <HelmetComponent />
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
