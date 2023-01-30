import React, { Component } from "react";
import styled from "styled-components";

//라이브러리
import Slider from "react-slick";

//컴포넌트
import Tutorial1 from "./Tutorial1";
import Tutorial2 from "./Tutorial2";
import Tutorial3 from "./Tutorial3";
import Tutorial4 from "./Tutorial4";

//css
//slick라이브러리 기본 css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//dot 커스텀 css
import "./style/test-css.css";
import { IMAGES } from "../../constants";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextTo>{IMAGES.rightArrow}</NextTo>,
      prevArrow: <Pre>{IMAGES.leftArrow}</Pre>,
    };

    return (
      <div>
        <StyledSlider {...settings} dotsClass="test-css">
          <div>
            <Tutorial1 />
          </div>
          <div>
            <Tutorial2 />
          </div>
          <div>
            <Tutorial3 />
          </div>
          <div>
            <Tutorial4 />
          </div>
        </StyledSlider>
      </div>
    );
  }
}

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    cursor: pointer;
  }
`;

const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 6%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 3%;
  z-index: 3;
`;
