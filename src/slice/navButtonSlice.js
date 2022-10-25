import { createSlice } from "@reduxjs/toolkit";

export const navButtonSlice = createSlice({
  name: "navButton",
  initialState: { about: false, skills: false, portfolio: false },
  reducers: {
    selected: (state, action) => {
      state.about = action.payload.about;
      state.skills = action.payload.skills;
      state.portfolio = action.payload.portfolio;
    },
  },
});
