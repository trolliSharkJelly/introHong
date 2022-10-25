import { configureStore } from "@reduxjs/toolkit";
import { navButtonSlice } from "./slice/navButtonSlice";

export const store = configureStore({
  reducer: {
    navButton: navButtonSlice.reducer,
  },
});
