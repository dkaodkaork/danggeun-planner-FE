import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, baseURL } from "../../core/apiConfig.js";
import { api } from "../../core/api";

//초기값 선언
const initialState = {
  groupList: [],
};

// 댓글 조회
export const __getGroupList = createAsyncThunk(
  "__getGroupList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.getGroupListApi();
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducer
export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getGroupList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.groupList = action.payload;
    });
    builder.addCase(__getGroupList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {} = groupSlice.actions;
export default groupSlice.reducer;
