import { configureStore } from "@reduxjs/toolkit";
import mypage from "../modules/mypageSlice";

const store = configureStore({
  reducer: { mypage },
});

export default store;
