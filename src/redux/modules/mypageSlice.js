import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../core/api";

const initialState = {
  data: {
    email: "",
    username: "",
    profileImage: "",
    totalCarrot: "",
  },
  isLoading: false,
  error: null,
};

export const __addNickname = createAsyncThunk(
  "nickname/add",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await api.postNicknameApi(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const mypageSlice = createSlice({
  name: "mypage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(__addTag.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.data = [...state.data, action.payload.data];
    // });
  },
});

export const {} = mypageSlice.actions;
export default mypageSlice.reducer;
