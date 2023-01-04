import React, { useState } from "react";
import Calendar from "react-calendar";
import "../calendar/screen/Calendar.css"; // css import

const CalendarGet = () => {
  const [value, onChange] = useState(new Date());

  const mark1 = ["2022-01-02", "2022-01-05", "2022-01-09"];
  const mark2 = ["2022-01-12", "2022-01-15", "2022-01-19"];
  const mark3 = ["2022-01-22", "2022-01-25", "2022-01-29"];
  const mark4 = ["2022-01-04", "2022-01-14", "2022-01-24"];

  return (
    <div>
      <h1>Calendar Page</h1>
      <Calendar
        onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
        value={value}
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        navigationLabel={null}
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = [];
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가

          html.push(<div className="dot1"></div>);

          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">
                {html}
              </div>
            </>
          );
        }}
      />
    </div>
  );
};

export default CalendarGet;

// {
//   ”statusCode” : 200,
//   ”msg” : “캘린더 조회 성공”,
//    ”data” :
//      {
//        “nickname” : “당그니”,
//        “profileImage” : “www.122asdfsdf.url”,
//        ”monthlyAverageCarrot” : 6.6,
//        “colorStage” : [ 1, 2, 0, 2, 1, 4, 2, 1, 1, 0 ]
//        }
//   }
