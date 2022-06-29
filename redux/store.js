import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contacts} from "./contacts/contacts-reducers";

const rootReducer = combineReducers({ contacts });

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});
