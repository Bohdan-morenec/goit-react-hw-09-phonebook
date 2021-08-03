import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactRequest,
  addСontactSuccess,
  aadContactError,
  filterContact,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchСontactSuccess,
  fetchContactError,
} from "../../redux/contacts/contacts-actions";

const itemsReducer = createReducer([], {
  [fetchСontactSuccess]: (_, { payload }) => payload,
  [addСontactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((todo) => todo.id !== payload),
});

const loggerReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addСontactSuccess]: () => false,
  [aadContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchСontactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const filterReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  logger: loggerReducer,
});
