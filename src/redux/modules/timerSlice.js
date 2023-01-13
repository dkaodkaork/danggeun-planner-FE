import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../core/api";

const initialState = {
  data: {
    timerId: "",
    date: "",
    startTime: "",
    endTime: "",
  },
  isLoading: false,
  error: null,
};

export const __startTimer = createAsyncThunk(
  "timer/start",
  async (_, thunkAPI) => {
    try {
      console.log("타이머 시작 통신 ");
      const { data } = await api.postTimerApi();
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const __finsihTimer = createAsyncThunk(
  "timer/finish",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await api.putTimerApi(payload.timerId);
      console.log(response);
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // 타이머 시작
      .addCase(__startTimer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__startTimer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.data = { ...action.payload };
      })
      .addCase(__startTimer.rejected, (state, action) => {
        state.isLoading = false;
      })

      // 타이머 종료
      .addCase(__finsihTimer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__finsihTimer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
      })
      .addCase(__finsihTimer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const {} = timerSlice.actions;
export default timerSlice.reducer;
