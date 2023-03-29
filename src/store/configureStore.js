import employeeReducer from "./employee";
import taskReducer from "./task";
import { configureStore } from "@reduxjs/toolkit";
import log from "./middleware/log";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log],
});

export default store;
