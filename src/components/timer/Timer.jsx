import React from "react";
import styled from "styled-components";

const Timer = ({ parsedTime }) => {
  // const circumference = 200 * Math.PI;
  // console.log(currentTime);
  // console.log(circumference);

  // const strokeDashoffset = () => {
  //   const a = circumference - (currentTime / startTime) * circumference;
  //   // console.log(a);
  //   return a;
  // };

  return (
    <StTimerContainer>
      <StTimer>{parsedTime || "00:00"}</StTimer>
      {/* <StTimerDiv>
			<StPtag>{parsedTime || "00:00"}</StPtag>
			<Stsvg>
				<Stcircle cx={100} cy={100} r={100} fill="none"></Stcircle>
			</Stsvg>
			<Stsvg>
				<Stcircle
					strokeDasharray={circumference}
					strokeDashoffset={!isPlaying ? strokeDashoffset() : 0}
					cx={100}
					cy={100}
					r={100}
					fill="none"
					strokeLinecap="round"
				></Stcircle>
			</Stsvg>
		</StTimerDiv> */}
    </StTimerContainer>
  );
};

export default Timer;

const StTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StTimer = styled.div`
  width: 260px;
  height: 260px;
  margin: 54px 58px 33px 57px;
  border-radius: 50%;
  font-size: 7rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffdfa;
  color: #595550;
  border: 3px solid #f27808;
`;

//

const StTimerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
  width: 200px;
  height: 200px;
`;

const StButton = styled.button`
  font-size: 16px;
  padding: 15px 40px;
  margin: 10px auto 30px;
  display: block;
  background-color: #4d4d4d;
  color: lightgray;
  border: none;
  cursor: pointer;
  outline: 0;
`;

const StPtag = styled.p`
  color: green;
  font-size: 7rem;
`;

const Stsvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY("-180deg") rotateZ("-90deg");
  overflow: visible;
`;

const Stcircle = styled.circle`
  stroke: black;
  stroke-width: 12;
`;
