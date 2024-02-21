import { configureStore } from "@reduxjs/toolkit";
import createRegisterSlice from "../register";
import createTestSlice from "../test";

export const store = configureStore({
  reducer: {
    register: createRegisterSlice,
    test: createTestSlice,
  },
});
