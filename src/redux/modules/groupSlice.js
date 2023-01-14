import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, baseURL } from "../../core/apiConfig.js";
import { api } from "../../core/api";

//초기값 선언
const initialState = {
  groupList: [],
  groupAdd: {},
  isLoading: false,
  error: null,
};

// 그룹 리스트 조회
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

// 그룹 등록
export const __postGroupAdd = createAsyncThunk(
  "__postGroupAdd",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.postGroupAddApi(payload);
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
    //그룹 리스트 조회
    builder.addCase(__getGroupList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.groupList = action.payload;
    });
    builder.addCase(__getGroupList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //그룹 등록
    builder.addCase(__postGroupAdd.fulfilled, (state, action) => {
      state.isLoading = false;
      state.groupAdd = action.payload;
    });
    builder.addCase(__postGroupAdd.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {} = groupSlice.actions;
export default groupSlice.reducer;
