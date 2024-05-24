import { createSlice } from "@reduxjs/toolkit";
import { currentDateToArray } from "../../utils/formatDate";
import createUuid from "../../utils/myUuid";

const initialState = {
  memoLists: [
    {
      id: createUuid(),
      content: "",
      createdAt: currentDateToArray(),
      isClicked: true,
    },
  ],
};

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    clickedMemo(state, action) {
      const { memoId } = action.payload;
      return {
        memoLists: [
          ...state.memoLists.map((memo) => ({
            ...memo,
            isClicked: memoId === memo.id,
          })),
        ],
      };
    },
    addMemo(state, action) {
      return {
        memoLists: [
          action.payload,
          ...state.memoLists.map((memo) => ({
            ...memo,
            isClicked: false,
          })),
        ],
      };
    },
    updateMemo(state, action) {
      const { memoContent } = action.payload;
      return {
        memoLists: state.memoLists.map((memo) => {
          if (memo.isClicked) {
            return {
              ...memo,
              content: memoContent,
            };
          }
          return memo;
        }),
      };
    },
    // deleteMemo(state, action) {
    //   console.log("DELETE MEMO");
    // },
  },
});

export const { clickedMemo, addMemo, updateMemo, deleteMemo } =
  memoSlice.actions;
export default memoSlice.reducer;
