import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  school: {
    classe: {
      students: [{ name: "Ash", age: 12 }],
    },
  },
};

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    // action creator
    increment: (state, { payload }) => {
      //action.type = counter(위 name)/increment
      const value = payload;
      state.count = state.count + value;
    },
    decrement: (state, { payload }) => {
      const value = payload;
      state.count = state.count - value;
    },
    update: (state) => {
      state.school.classe.students.find(
        (student) => student.name === "Ash"
      ).age = 20;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
