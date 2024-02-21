import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Musab Al Mahi",
  email: "musab@gmail.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
