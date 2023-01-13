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

export const __putNickname = createAsyncThunk(
  "nickname/add",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.putNicknameApi(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const __getUserInfo = createAsyncThunk(
  "userinfo/get",
  async (_, thunkAPI) => {
    try {
      const response = await api.getUserInfoApi();
      console.log(response);
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putProfileImg = createAsyncThunk(
  "profileImg/put",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await api.putProfileImgApi(payload);
      console.log("사진등록", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const mypageSlice = createSlice({
  name: "mypage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // 닉네임 등록
      .addCase(__putNickname.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__putNickname.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
        state.data = { ...state.data, username: action.payload.data.username };
      })
      .addCase(__putNickname.rejected, (state, action) => {
        state.isLoading = false;
      })

      // 마이페이지 유저정보 가져오기
      .addCase(__getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = { ...action.payload };
      })
      .addCase(__getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // 프로필이미지 변경하기
      .addCase(__putProfileImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__putProfileImg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = {
          ...state.data,
          profileImage: action.payload.profileImage,
        };
      })
      .addCase(__putProfileImg.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const {} = mypageSlice.actions;
export default mypageSlice.reducer;
