import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import calendarSlice from "../modules/calendarSlice";
import mypage from "../modules/mypageSlice";
import modalSlice from "../modules/modalSlice";
import timer from "../modules/timerSlice";
import group from "../modules/groupSlice";
import planner from "../modules/plannerSlice";

const store = configureStore({
  reducer: {
    mypage,
    calendarSlice,
    modalSlice,
    timer,
    group,
    planner,
  },
  //직렬화 오류로 추가
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});

export default store;
