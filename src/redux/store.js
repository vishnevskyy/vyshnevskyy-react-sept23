import {combineReducers} from "redux";
import {userReducer} from "./slices/usersSlice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer=combineReducers({users:userReducer});
const setupStore=()=>configureStore({reducer:rootReducer});
export {
    setupStore
}