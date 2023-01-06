import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "../modules/calendarSlice";
import mypage from "../modules/mypageSlice";

const store = configureStore({
  reducer: { mypage,calendarSlice },
});

export default store; 
