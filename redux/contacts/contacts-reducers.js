import { combineReducers } from "@reduxjs/toolkit";
import { items, loading, error } from "./items/items-reducers";
import { filter } from "./filter/filter-reducers";

export const contacts = combineReducers({
  items,
  filter,
  loading,
  error,
});