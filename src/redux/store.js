import { configureStore } from "@reduxjs/toolkit";
import darkRoot from "./darkRoot";

//the Redux store is created here. It imports the combined reducer and then export it for use in the application
const store = configureStore({
  reducer: darkRoot,
});

export default store;
