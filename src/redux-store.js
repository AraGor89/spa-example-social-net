import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import postsReducer from "./reducers/postsReducer";
import usersReducer from "./reducers/usersReducer";
import toDoosReducer from "./reducers/toDoosReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  postsReducer: postsReducer,
  usersReducer: usersReducer,
  toDoosReducer: toDoosReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;
export default store;
