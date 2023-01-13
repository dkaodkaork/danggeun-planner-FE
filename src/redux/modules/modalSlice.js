import { createSlice } from "@reduxjs/toolkit";

//초기값 선언
const initialState = {
  groupMenuOpen: false,
  detailMenuOpen: false,
};

// reducer
export const modalSlice = createSlice({
  name: "openModal",
  initialState,
  reducers: {
    groupMenuOpenStatus: (state, action) => {
      state.groupMenuOpen = action.payload;
    },
    detailMenuOpenStatus: (state, action) => {
      state.detailMenuOpen = action.payload;
    },
  },
});

export const { groupMenuOpenStatus, detailMenuOpenStatus } = modalSlice.actions;
export default modalSlice.reducer;
