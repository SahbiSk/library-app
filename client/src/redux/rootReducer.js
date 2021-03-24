import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import messageReducer from "./reducers/messageReducer";
import bookReducer from "./reducers/bookReducer";
import cargoReducer from "./reducers/cargoReducer";

const rootReducer = combineReducers({
  userReducer,
  messageReducer,
  bookReducer,
  cargoReducer,
});

export default rootReducer;
