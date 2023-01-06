import React, { Component } from "react";
import { Helmet } from "react-helmet";

class HelmetComponent extends Component {
  render() {
    return (
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    );
  }
}

export default HelmetComponent; //별도 컴포넌트로 생성
