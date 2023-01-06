import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "../modules/calendarSlice";

const store = configureStore({
  reducer: { calendarSlice },
});

export default store;
