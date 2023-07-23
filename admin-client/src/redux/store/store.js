import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../state/userSlice"
export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});