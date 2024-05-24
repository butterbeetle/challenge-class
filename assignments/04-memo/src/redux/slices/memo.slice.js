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
    deleteMemo(state) {
      if (state.memoLists.length === 1) {
        alert("하나 이상의 메모는 남겨두어야 합니다.");
        return;
      }

      return {
        memoLists: state.memoLists
          .filter((memo) => !memo.isClicked)
          .map((memo, idx) => {
            if (!idx) {
              return {
                ...memo,
                isClicked: true,
              };
            }
            return memo;
          }),
      };
    },
  },
});

export const { clickedMemo, addMemo, updateMemo, deleteMemo } =
  memoSlice.actions;
export default memoSlice.reducer;
