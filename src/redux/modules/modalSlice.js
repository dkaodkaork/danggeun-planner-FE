import { createSlice } from "@reduxjs/toolkit";

//초기값 선언
const initialState = {
  groupMenuOpen: false,
  detailMenuOpen: false,
  groupMemberOpen: false,
  planModalOpen: false,
  searchModalOpen: false,
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
    groupMemberOpenStatus: (state, action) => {
      state.groupMemberOpen = action.payload;
    },
    planModalOpenStatus: (state, action) => {
      state.addPlanModalOpen = action.payload;
    },
    searchModalOpenStatus: (state, action) => {
      state.searchModalOpen = action.payload;
    },
  },
});

export const {
  groupMenuOpenStatus,
  detailMenuOpenStatus,
  groupMemberOpenStatus,
  planModalOpenStatus,
  searchModalOpenStatus,
} = modalSlice.actions;
export default modalSlice.reducer;
