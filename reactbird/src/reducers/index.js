import { combineReducers } from "redux";
import AllReducers from "./AllReducers";

const rootReducer = combineReducers({
  voices: AllReducers
});

export default rootReducer;