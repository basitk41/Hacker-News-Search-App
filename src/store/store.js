import { createStore, combineReducers, compose } from "redux";
import History from "./reducer/history";
import Search from "./reducer/search";
const rootReducer = combineReducers({
  history: History,
  search: Search,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());
export default store;
