import { configureStore } from "@reduxjs/toolkit";
import memoSlice from "../slices/memo.slice";

const store = configureStore({
  reducer: {
    memo: memoSlice,
  },
});

export default store;
