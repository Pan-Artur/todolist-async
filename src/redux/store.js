import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from "./reducers";
import { tasksReducer } from "./slice";

export const store = configureStore({
  reducer: tasksReducer,
});