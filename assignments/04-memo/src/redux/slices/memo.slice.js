import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    addMemo(state, action) {
      console.log("ADD MEMO");
    },
    updateMemo(state, action) {
      console.log("UPDATE MEMO");
    },
    deleteMemo(state, action) {
      console.log("DELETE MEMO");
    },
  },
});

export const { addMemo, updateMemo, deleteMemo } = memoSlice.actions;
export default memoSlice.reducer;
