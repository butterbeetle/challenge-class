import { createSlice } from "@reduxjs/toolkit";
import { currentDateToArray } from "../../utils/formatDate";
import createUuid from "../../utils/myUuid";

const initialState = [
  {
    id: createUuid(),
    content: "",
    createdAt: currentDateToArray(),
    isClicked: true,
  },
];

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    addMemo(state, action) {
      // const { id, content, createdAt } = action.payload;
      // console.log("ADD MEMO", id, content, createdAt);
      state.forEach((data) => (data.isClicked = false));
      state.unshift(action.payload);
    },
    // updateMemo(state, action) {
    //   console.log("UPDATE MEMO");
    // },
    // deleteMemo(state, action) {
    //   console.log("DELETE MEMO");
    // },
  },
});

export const { addMemo, updateMemo, deleteMemo } = memoSlice.actions;
export default memoSlice.reducer;
