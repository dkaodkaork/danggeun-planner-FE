import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "../modules/calendarSlice";
import mypage from "../modules/mypageSlice";
import timer from "../modules/timerSlice";

const store = configureStore({
  reducer: { mypage, calendarSlice, timer },
});

export default store;
