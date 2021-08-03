import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import contactsReducer from "../redux/contacts/contacts-reducer";
import authorizationReducer from "./authorization/authorization-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import { composeWithDevTools } from "redux-devtools-extension";

import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    authorization: persistReducer(contactsPersistConfig, authorizationReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const storePersistor = { store, persistor };

export default storePersistor;
