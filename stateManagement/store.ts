import {createStore, applyMiddleware} from 'redux';
import {thunk} from "redux-thunk";
import reducers from "./reducers";

// @ts-ignore
const store = createStore(reducers, applyMiddleware(thunk));
export default store;