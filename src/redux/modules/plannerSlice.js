import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../core/api";

const initialState = {
  data: {
    isOwner: "",
    username: "",
    carrot: "",
    timers: [],
    plans: [],
  },
  isLoading: false,
  error: null,
};

export const __getPlanner = createAsyncThunk(
  "planner/get",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { username, date } = payload;
      console.log(username, date);
      const response = await api.getPlannerApi(username, date);
      console.log(response);
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      console.log(error.response.status);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const __postPlan = createAsyncThunk(
  "plan/post",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await api.postPlanApi(payload);
      console.log(response);
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const __putPlan = createAsyncThunk(
  "plan/put",
  async (payload, thunkAPI) => {
    console.log(payload);
    const { planId, planInfo } = payload;
    try {
      const response = await api.putPlanApi(planId, planInfo);
      console.log(response);
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const __deletePlan = createAsyncThunk(
  "plan/delete",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await api.deletePlanApi(payload);
      console.log(response);
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // 플래너 조회
      .addCase(__getPlanner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getPlanner.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        // state.data = {...action.payload}
      })
      .addCase(__getPlanner.rejected, (state, action) => {
        state.isLoading = false;
      })

      // 계획 등록
      .addCase(__postPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__postPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
        state.data.plans = { ...state.data.plans, ...action.payload };
      })
      .addCase(__postPlan.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // 계획 수정
      .addCase(__putPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__putPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
        state.data.plans = state.data.plans.map((plan) => {
          if (plan.planId === action.payload.planId) {
            return (plan = action.payload.planInfo);
          }
        });
      })
      .addCase(__putPlan.rejected, (state, action) => {
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
        state.data.plans = state.data.plans.filter(
          (plan) => plan.planId !== action.payload
        );
      })
      .addCase(__deletePlan.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const {} = plannerSlice.actions;
export default plannerSlice.reducer;