import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice"; //Redux Toolkit - імпортуємо слайс контактів
import { filtersReducer } from "./filters/slice"; //Redux Toolkit - імпортуємо слайс фільтрів
import { authReducer } from "./auth/slice";        //Redux Toolkit - імпортуємо слайс авторизації

// //persist - імопртуємо необхідні бібліотеки persist redux. З цим не розбирємось - просто копіюємо
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// //persist

// //persist - вказуємо які редюсери нам потрібно зберегти в локальному сховищі
// const contactsPeristConfig = {
//   key: "contactsitems",
//   storage,
//   whitelist: ["items"], // зберігаємо лише властивість items з головного сховища у локальному сховищі (білий список)
// };
// //persist

//Redux Toolkit - єкспортуємо головне сховище store
export const store = configureStore({
  reducer: {
    // contacts: persistReducer(contactsPeristConfig, contactsReducer), //redux-persist - додаємо до головного сховища збережені дані в локальному сховищі
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },

  // //persist - конфігурація middleware для redux-persist. З цим не розбирємось - просто копіюємо
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
  // //persist

});

// //persist - єкспортуємо store з redux-persist
// export const persistor = persistStore(store);
// //persist