import reducer from "./task";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer });

export default store;
