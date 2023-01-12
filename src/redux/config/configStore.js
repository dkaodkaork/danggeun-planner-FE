import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "../modules/calendarSlice";
import mypage from "../modules/mypageSlice";
import modalSlice from "../modules/modalSlice";

const store = configureStore({
  reducer: { mypage, calendarSlice, modalSlice },
});

export default store;
