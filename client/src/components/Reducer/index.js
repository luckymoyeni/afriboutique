import CounterReducer from "./Counter";
import LoggedReducer from "./IsLogged";
import  Mainreducer  from "./BasketReducer";

import { combineReducers } from "redux"

const AllReducers = combineReducers({
    CounterReducer,
    LoggedReducer,
    Mainreducer,
})

export default AllReducers;