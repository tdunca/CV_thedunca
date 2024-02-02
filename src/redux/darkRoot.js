import { combineReducers } from "redux";
import darkTheme from "./darkTheme";

//this file uses the combineReducers function from the redux library to combine the darkTheme reducer.
const darkRoot = combineReducers({
  theme: darkTheme,
});

export default darkRoot;
