// moment 라이브러리 사용으로 추후 삭제? 해야 될 것 같음

export const today = () => {
  let now = new Date();
  // console.log(now);
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = week[now.getDay()];

  return year + "년 " + month + "월 " + date + "일 " + "(" + dayOfWeek + ")";
};

export const getDayOfWeek = (day) => {
  //ex) getDayOfWeek('2022-06-13')

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const dayOfWeek = week[new Date(day).getDay()];
  let year = day.slice(0, 4);
  let month = day.slice(5, 7);
  let date = day.slice(8, 10);

  return year + "년 " + month + "월 " + date + "일 " + "(" + dayOfWeek + ")";
};

export const timeStamp = () => {
  let today = new Date(); //
  today.setHours(today.getHours() + 9);
  return today.toISOString().substring(0, 19);
};

export const planStartTime = (time, startTime) => {
  return (
    startTime +
    "T" +
    (time.hour.length < 2 ? "0" + time.hour + ":" : time.hour + ":") +
    (time.min.length < 2 ? "0" + time.min : time.min)
  );
};
