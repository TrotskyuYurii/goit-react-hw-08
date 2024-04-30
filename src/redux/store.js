import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice"; //Redux Toolkit - імпортуємо слайс контактів
import { filtersReducer } from "./filters/slice"; //Redux Toolkit - імпортуємо слайс фільтрів
import { authReducer } from "./auth/slice";        //Redux Toolkit - імпортуємо слайс авторизації

// //persist - імопртуємо необхідні бібліотеки persist redux. З цим не розбирємось - просто копіюємо
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

import storage from "redux-persist/lib/storage";
// //persist

// //persist - вказуємо які редюсери нам потрібно зберегти в локальному сховищі
const authPeristConfig = {
  key: "auth",
  storage,
  whitelist: ["token"], // зберігаємо лише властивість items з головного сховища у локальному сховищі (білий список)
};
// //persist

//Redux Toolkit - єкспортуємо головне сховище store
export const store = configureStore({
  reducer: {
    // contacts: persistReducer(authPeristConfig, contactsReducer), //redux-persist - додаємо до головного сховища збережені дані в локальному сховищі ПРИКЛАД
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistReducer(authPeristConfig, authReducer),
  },

  //persist - конфігурація middleware для redux-persist. З цим не розбирємось - просто копіюємо
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  //persist

});

// //persist - єкспортуємо store з redux-persist в main.jsx
export const persistor = persistStore(store);
// //persist