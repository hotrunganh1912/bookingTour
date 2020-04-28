// import callApi from "../common/callAPI";
import users from "./users";
import search from "./search";
import recoverUser from './recoverUser';
import { combineReducers } from "redux";

const reducer = combineReducers({
  users,
  search,
  recoverUser
});

export default reducer;
