import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("contact/addContactRequest");
export const addСontactSuccess = createAction("contact/addСontactSuccess");
export const aadContactError = createAction("contact/aadContactError");

export const deleteContactRequest = createAction(
  "contact/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contact/deleteContactSuccess"
);
export const deleteContactError = createAction("contact/deleteContactError");

export const fetchContactRequest = createAction("contact/fetchContactRequest");
export const fetchСontactSuccess = createAction("contact/fetchСontactSuccess");
export const fetchContactError = createAction("contact/fetchContactError");

export const filterContact = createAction("filterContact");
