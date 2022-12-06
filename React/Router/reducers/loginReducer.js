import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
  name: "login",
  initialState: { value: false },
  reducers: {
    LOGIN: (state) => {
     state.value = true
    },
    LOGOUT: (state) => {
      state.value = false
    },
  },
});
