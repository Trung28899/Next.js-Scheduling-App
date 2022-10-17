import { combineReducers } from "redux";
// eslint-disable-next-line import/no-cycle
import loadingReducer from "./loadingReducer";
import eventReducer from "./eventReducer";

const reducer = combineReducers({
  loading: loadingReducer,
  event: eventReducer,
});

export default reducer;
export type State = ReturnType<typeof reducer>;
