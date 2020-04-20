// import callApi from "../common/callAPI";
import users from "./users";
import search from "./search";
import { combineReducers } from "redux";

const reducer = combineReducers({
  users,
  search,
});

export default reducer;
