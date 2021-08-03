import { createAction } from "@reduxjs/toolkit";

export const registrationRequest = createAction(
  "authorization/registrationRequest"
);
export const registrationSuccess = createAction(
  "authorization/registrationSuccess"
);
export const registrationError = createAction(
  "authorization/registrationError"
);

export const loginRequest = createAction("authorization/loginRequest");
export const loginSuccess = createAction("authorization/loginSuccess");
export const loginError = createAction("authorization/loginError");

export const logoutRequest = createAction("authorization/logoutRequest");
export const logoutSuccess = createAction("authorization/logoutSuccess");
export const logoutError = createAction("authorization/logoutError");

export const currentRequest = createAction("authorization/currentRequest");
export const currentSuccess = createAction("authorization/currentSuccess");
export const currentError = createAction("authorization/currentError");
