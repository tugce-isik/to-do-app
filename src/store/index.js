import { Reducer } from "./reducers/todoReducer";

import {combineReducers, legacy_createStore} from "redux";
import todoReducer from "./reducers/todoReducer";

const reducer = combineReducers({
    todo:todoReducer
})

export const store = legacy_createStore(reducer)