import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../core/api";

//초기값 선언
const initialState = {
  searchMember: [],
  isLoading: false,
  error: null,
};

// 그룹 초대 회원 검색
export const __getGroupMemberInvite = createAsyncThunk(
  "__getGroupMemberInvite",
  async (payload, thunkAPI) => {
    //구조분해할당
    const { groupId, username } = payload;
    try {
      const { data } = await api.getGroupMemberInviteApi(groupId, username);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducer
export const groupInviteSlice = createSlice({
  name: "groupInvite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //회원 검색
    builder.addCase(__getGroupMemberInvite.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });
    builder.addCase(__getGroupMemberInvite.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {} = groupInviteSlice.actions;
export default groupInviteSlice.reducer;
