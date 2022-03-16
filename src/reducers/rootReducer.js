import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";

export const rootReducer = combineReducers({
  shops: shopReducer,
});
