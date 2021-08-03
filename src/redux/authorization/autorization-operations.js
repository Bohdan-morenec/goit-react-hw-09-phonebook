import axios from "axios";
import { pnotifyError } from "../../options/Pnotify";
import {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  currentRequest,
  currentSuccess,
  currentError,
} from "./authorization-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const pnotify = (status, text) => {
  status === 400 ? pnotifyError(text) : pnotifyError("Something went wrong");
};

export const registrationUser = (user) => async (dispatch) => {
  dispatch(registrationRequest());

  try {
    const { data } = await axios.post("/users/signup", user);

    token.set(data.token);

    dispatch(registrationSuccess(data));
  } catch (error) {
    const { status } = error.response;

    pnotify(status, "such user already exists");

    dispatch(registrationError(error.message));
  }
};

export const login = (user) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post("/users/login", user);

    token.set(data.token);

    dispatch(loginSuccess(data));
  } catch (error) {
    const { status } = error.response;

    pnotify(
      status,
      "you entered an incorrect email or password, please try again"
    );

    dispatch(loginError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();

    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const currentUser = () => async (dispatch, getState) => {
  const {
    authorization: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  dispatch(currentRequest());

  try {
    token.set(persistedToken);

    const { data } = await axios.get("/users/current");

    dispatch(currentSuccess(data));
  } catch (error) {
    dispatch(currentError(error.message));
  }
};
