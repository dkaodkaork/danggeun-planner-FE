import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../core/api";

const initialState = {
  alarmList: [],
  alarmRead: true,
  isLoading: false,
  isRead: true,
  error: null,
};

//알람 수신 확인
export const __getAlarm = createAsyncThunk(
  "/__getAlarm",
  async (payload, thunkAPI) => {
    try {
      const data = await api.getAlarmApi();
      //console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      // console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

//알람 수신 확인
export const __patchAlarm = createAsyncThunk(
  "/__patchAlarm",
  async (payload, thunkAPI) => {
    try {
      const data = await api.patchAlarmApi();
      //console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      // console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

//알람 리스트 조회
export const __getAlarmList = createAsyncThunk(
  "/__getAlarmList",
  async (payload, thunkAPI) => {
    try {
      const data = await api.getAlarmListApi();
      //console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

//그룹 초대 승락
export const __postAlarmAccept = createAsyncThunk(
  "/__postAlarmAccept",
  async (payload, thunkAPI) => {
    //console.log(payload);
    const { groupId, notificationId } = payload;
    try {
      const data = await api.postAlarmAcceptApi(groupId, notificationId);
      //console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      // console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

//그룹 초대 거절
export const __deleteAlarmReject = createAsyncThunk(
  "/__deleteAlarmReject",
  async (payload, thunkAPI) => {
    //console.log(payload);
    const { groupId, notificationId } = payload;
    try {
      const data = await api.deleteAlarmRejectApi(groupId, notificationId);
      //console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      // console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

//그룹 초대 결과 확인
export const __deleteConfirm = createAsyncThunk(
  "/__deleteConfirm",
  async (payload, thunkAPI) => {
    //console.log(payload);
    try {
      const data = await api.deleteConfirmApi(payload);
      //console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      // console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const alarmSlice = createSlice({
  name: "alarm",
  initialState,
  reducers: {
    alarmReadStatus: (state, action) => {
      state.alarmRead = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // 알림 수신 확인
      .addCase(__getAlarm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getAlarm.fulfilled, (state, action) => {
        state.isLoading = false;
        //console.log("슬라이스에서", action.payload.isRead);
        state.isRead = action.payload.isRead;
      })
      .addCase(__getAlarm.rejected, (state, action) => {
        state.isLoading = false;
      })

      // 종모양 누르면 알림 수신했다 전송
      .addCase(__patchAlarm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__patchAlarm.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(__patchAlarm.rejected, (state, action) => {
        state.isLoading = false;
      })

      // 알림 리스트 조회
      .addCase(__getAlarmList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getAlarmList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alarmList = [...action.payload.data];
      })
      .addCase(__getAlarmList.rejected, (state, action) => {
        state.isLoading = false;
      })

      // 그룹 초대 수락
      .addCase(__postAlarmAccept.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__postAlarmAccept.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alarmList = state.alarmList.filter(
          (alarm) => alarm?.groupId !== action.payload.groupId
        );
      })
      .addCase(__postAlarmAccept.rejected, (state, action) => {
        state.isLoading = false;
      })

      // 그룹 초대 거절
      .addCase(__deleteAlarmReject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deleteAlarmReject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alarmList = state.alarmList.filter(
          (alarm) => alarm?.groupId !== action.payload.groupId
        );
      })
      .addCase(__deleteAlarmReject.rejected, (state, action) => {
        state.isLoading = false;
      })

      // 그룹 초대 결과 확인
      .addCase(__deleteConfirm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deleteConfirm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alarmList = state.alarmList.filter(
          (alarm) => alarm?.notificationId !== action.payload.notificationId
        );
      })
      .addCase(__deleteConfirm.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { alarmReadStatus } = alarmSlice.actions;
export default alarmSlice.reducer;
