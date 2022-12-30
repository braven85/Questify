import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usersReducer from "../slices/users";
import cardsReducer from "../slices/cards";
import { persistReducer } from "redux-persist";
import { getPersistConfig } from "redux-deep-persist";
import localStorage from "redux-persist/lib/storage";
import storage from "redux-persist/lib/storage";

const appReducers = combineReducers({
  users: usersReducer,
  cards: cardsReducer,
});

const reducers = (state, action) => {
  if (action.type === "users/logout/pending") {
    storage.removeItem("persist:root");
    return appReducers(undefined, action);
  }
  return appReducers(state, action);
};

const persistConfig = getPersistConfig({
  key: "root",
  storage: localStorage,
  blacklist: ["users.loading"],
  rootReducer: reducers,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
