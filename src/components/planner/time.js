export const today = () => {
  let now = new Date();
  console.log(now);
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = week[now.getDay()];

  return year + "년 " + month + "월 " + date + "일 " + "(" + dayOfWeek + ")";
};

export const timeStamp = () => {
  let today = new Date(); //
  today.setHours(today.getHours() + 9);
  return today.toISOString().substring(0, 19);
};
