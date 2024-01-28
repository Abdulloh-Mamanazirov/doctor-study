import { createSlice } from "@reduxjs/toolkit";

export const createRegisterSlice = createSlice({
  name: "register",
  initialState: {
    first_name: "",
    last_name: "",
    work_location: "",
    job: "",
    email: "",
    password: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.first_name = action.payload;
    },
    setLastName: (state, action) => {
      state.last_name = action.payload;
    },
    setWorkLocation: (state, action) => {
      state.work_location = action.payload;
    },
    setJob: (state, action) => {
      state.job = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});
export const {
  setFirstName,
  setLastName,
  setWorkLocation,
  setJob,
  setEmail,
  setPassword,
} = createRegisterSlice.actions;

export default createRegisterSlice.reducer;
