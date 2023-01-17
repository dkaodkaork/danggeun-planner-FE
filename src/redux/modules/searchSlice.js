import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../core/api";

//초기값 선언
const initialState = {
  members: [],
};

// 캘린더 조회
export const __getSearchUser = createAsyncThunk(
  "__getSearchUser",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.getSearchUserApi(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducer
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getSearchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.members = action.payload.members;
    });
    builder.addCase(__getSearchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {} = searchSlice.actions;
export default searchSlice.reducer;
