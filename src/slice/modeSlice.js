import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: { mode: false },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload.mode;
    },
  },
});
