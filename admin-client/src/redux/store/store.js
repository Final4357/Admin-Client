import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../state/userSlice"
import eventReducer from "../state/eventSlice"
import newsReducer from "../state/newsSlice"

export const store = configureStore({
  reducer: {
    user: usersReducer,
    event: eventReducer,
    news: newsReducer,
  },
});