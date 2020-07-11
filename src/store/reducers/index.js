import { combineReducers } from "redux";
import users from "./users";
import works from "./works"

export default combineReducers({
  users,
  works
});
