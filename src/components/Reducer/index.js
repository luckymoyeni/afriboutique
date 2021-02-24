import CounterReducer from "./Counter";
import LoggedReducer from "./IsLogged";

import { combineReducers } from "redux"

const AllReducers = combineReducers({
    CounterReducer,
    LoggedReducer
})

export default AllReducers;