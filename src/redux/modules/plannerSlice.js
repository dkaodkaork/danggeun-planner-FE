import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../core/api";

const initialState = {
  data: {
    isOwner: true,
    username: "",
    profileImage: "",
    carrot: "",
    isPlannerOpened: "",
    contents: [],
  },
  isLoading: false,
  error: null,
};

export const __getAllPlan = createAsyncThunk(
  "all/get",
  async (payload, thunkAPI) => {
    const { username, date } = payload;
    try {
      const { data } = await api.getAllPlanApi(username, date);
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const __getPlan = createAsyncThunk(
  "plan/get",
  async (payload, thunkAPI) => {
    const { username, date } = payload;
    try {
      const { data } = await api.getPlanApi(username, date);
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const __getFocusPlan = createAsyncThunk(
  "focusplan/get",
  async (payload, thunkAPI) => {
    const { username, date } = payload;
    try {
      const { data } = await api.getFocusPlanApi(username, date);
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const __postPlan = createAsyncThunk(
  "plan/post",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.postPlanApi(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const __putPlan = createAsyncThunk(
  "plan/put",
  async (payload, thunkAPI) => {
    console.log("수정통신 시작", payload);
    const { id, planInfo } = payload;
    try {
      const { data } = await api.putPlanApi(id, planInfo);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const __putTimerContent = createAsyncThunk(
  "timer/put",
  async (payload, thunkAPI) => {
    console.log(payload);

    try {
      const { data } = await api.putTimerContentApi(payload.id, payload.title);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const __deletePlan = createAsyncThunk(
  "plan/delete",
  async (payload, thunkAPI) => {
    console.log("삭제 통신 시작 ", payload);
    try {
      const response = await api.deletePlanApi(payload.id);
      console.log(response);
      return thunkAPI.fulfillWithValue(payload.id);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    timerTest: (state, action) => {
      state.data.contents = state.data.contents.map((plan) => {
        if (plan?.timerId === action.payload.id) {
          return {
            ...plan,
            content: action.payload.title.content,
          };
        }

        return plan;
      });
    },
  },
  extraReducers: (builder) => {
    builder

      // 플래너 전체 조회
      .addCase(__getAllPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getAllPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = { ...action.payload };
      })
      .addCase(__getAllPlan.rejected, (state, action) => {
        state.isLoading = false;
      })
      // 계획만 조회
      .addCase(__getPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = { ...action.payload };
      })
      .addCase(__getPlan.rejected, (state, action) => {
        state.isLoading = false;
      })
      // 집중계획 조회
      .addCase(__getFocusPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getFocusPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = { ...action.payload };
      })
      .addCase(__getFocusPlan.rejected, (state, action) => {
        state.isLoading = false;
      })

      // 계획 등록
      .addCase(__postPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__postPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.data.contents = [...state.data.contents, action.payload];
      })
      .addCase(__postPlan.rejected, (state, action) => {
        state.isLoading = false;
      })

      // 계획 수정
      .addCase(__putPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__putPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.data.contents = state.data.contents.map((plan) => {
          if (plan?.planId === action.payload.planId) {
            return {
              ...plan,
              ...action.payload,
            };
          }
          return plan;
        });
      })
      .addCase(__putPlan.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // // 타이머 제목 수정
      .addCase(__putTimerContent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__putTimerContent.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.data.contents = state.data.contents.map((plan) => {
          if (plan?.timerId === action.payload.timerId) {
            return {
              ...plan,
              ...action.payload,
            };
          }
          return plan;
        });
      })
      .addCase(__putTimerContent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // 계획 삭제
      .addCase(__deletePlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deletePlan.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
        state.data.contents = state.data.contents.filter(
          (plan) => plan?.planId !== action.payload
        );
      })
      .addCase(__deletePlan.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { timerTest } = plannerSlice.actions;
export default plannerSlice.reducer;
