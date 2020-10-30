import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import nameReducer from "./nameReducer";

const rootReducer = combineReducers({
  name: nameReducer,
  number: counterReducer,
});

export default rootReducer;
