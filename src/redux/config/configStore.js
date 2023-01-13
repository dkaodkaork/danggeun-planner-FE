import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "../modules/calendarSlice";
import mypage from "../modules/mypageSlice";
import timer from "../modules/timerSlice";
import planner from "../modules/plannerSlice";

const store = configureStore({
  reducer: { mypage, calendarSlice, timer, planner },
});

export default store;
