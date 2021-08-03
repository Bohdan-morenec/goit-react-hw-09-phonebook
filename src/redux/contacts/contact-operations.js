import {
  addContactRequest,
  addСontactSuccess,
  aadContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchСontactSuccess,
  fetchContactError,
} from "./contacts-actions";

import axios from "axios";

export const addСontact = (value) => async (dispatch) => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post("/contacts", value);

    dispatch(addСontactSuccess(data));
  } catch (error) {
    dispatch(aadContactError(error.message));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

export const fetchContact = () => async (dispatch) => {
  dispatch(fetchContactRequest);

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchСontactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};
