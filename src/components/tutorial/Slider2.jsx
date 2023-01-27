import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SliderList = styled.div`
  display: flex;

  transition: ${(props) =>
    props.index === props.count ? "" : "all 0.5s linear"};
  transform: ${(props) => `translateX(${-100 * props.index}%)`};
`;

const SliderItem = styled.div`
  position: relative;
  height: 100%;
  min-width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    color: white;
    justify-content: center;
    font-size: 60px;
    font-weight: bold;
  }
`;

const Slider = () => {
  const slides = ["#33a", "#8c9", "#f3e074"];
  const sliderRef = useRef(null);
  const count = 1; // 양쪽에 추가할 개수
  const [currentIndex, setCurrentIndex] = useState(count);

  const createSlides = useCallback(() => {
    const items = [...slides];
    for (let i = 0; i < count; i++) {
      items.push(slides[i % slides.length]);
      items.unshift(slides[slides.length - 1 - (i % slides.length)]);
    }
    return items;
  }, [slides]);

  const [newSlides, setNewSlides] = useState(createSlides);

  const loop = useRef(false);
  useEffect(() => {
    const startTimer = setInterval(
      () => {
        if (currentIndex === newSlides.length - 1) {
          loop.current = true;
          setCurrentIndex(count);
        } else {
          loop.current = false;
          setCurrentIndex(currentIndex + 1);
        }
      },
      loop.current ? 0 : 2000
    );
    return () => {
      clearInterval(startTimer);
    };
  }, [newSlides, currentIndex]);

  return (
    <SliderWrapper>
      <SliderList ref={sliderRef} index={currentIndex} count={count}>
        {newSlides?.map((color, index) => (
          <SliderItem key={index}>
            <div key={index} style={{ background: color }}>
              {index}
            </div>
          </SliderItem>
        ))}
      </SliderList>
    </SliderWrapper>
  );
};

export default Slider;
