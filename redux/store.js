import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "./todos";

export default configureStore({
  reducer: {
    task: taskReducers,
  },
});
