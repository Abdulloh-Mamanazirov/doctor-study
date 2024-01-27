import { configureStore } from "@reduxjs/toolkit";
import  createRegisterSlice  from "../register";

export const store = configureStore({
  reducer: {
    register: createRegisterSlice,
  },
});
