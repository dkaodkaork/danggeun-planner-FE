import { createSlice } from "@reduxjs/toolkit";

//초기값 선언
const initialState = {
  groupMenuOpen: false,
};

// reducer
export const modalSlice = createSlice({
  name: "openModal",
  initialState,
  reducers: {
    groupMenuOpenStatus: (state, action) => {
      state.groupMenuOpen = action.payload;
    },
  },
});

export const { groupMenuOpenStatus } = modalSlice.actions;
export default modalSlice.reducer;
