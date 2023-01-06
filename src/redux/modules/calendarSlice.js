import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/apiConfig.js";
//import { api } from "../../core/api";

//초기값 선언
const initialState = {
  data: {},
};
// 댓글 조회
export const __getCalendar = createAsyncThunk(
  "__getCalendar",
  async (payload, thunkAPI) => {
    const { todayMonth, todayYear } = payload;
    try {
      const { data } = await instance.get(
        `/calendar/${todayYear}-${todayMonth}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducer
export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getCalendar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(__getCalendar.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {} = calendarSlice.actions;
export default calendarSlice.reducer;
