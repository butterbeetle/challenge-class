import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import memoSlice from "../slices/memo.slice";

const reducers = combineReducers({
  memo: memoSlice,
});

const persistConfig = {
  key: "memo",
  storage, // 로컬 스토리지에 저장
  whitelist: ["memo"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
