import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    content: "long eng long eng long eng long eng long eng ",
    createdAt: "오전 10:36",
  },
  {
    id: 2,
    content: "오호오호오호오호오호오호오호오호",
    createdAt: "오전 11:36",
  },
  {
    id: 3,
    content: "오마에와 모 신데이루. 나.. 나니잇 으어어억",
    createdAt: "오전 12:36",
  },
];

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    addMemo(state, action) {
      // const { id, content, createdAt } = action.payload;
      // console.log("ADD MEMO", id, content, createdAt);
      state.push(action.payload);
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
