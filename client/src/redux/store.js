import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
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
import productsReducer from "./products/productsSlice";
import shopsReducer from "./shops/shopsSlice";

const shopsPersistConfig = {
  key: "shops",
  storage,
  whitelist: ["shops"],
};

const productsPersistConfig = {
  key: "products",
  storage,
  whitelist: ["product"],
};

const shopsPersistedReducer = persistReducer(shopsPersistConfig, shopsReducer);
const productsPersistedReducer = persistReducer(
    productsPersistConfig,
    productsReducer
);

const store = configureStore({
  reducer: {
    shops: shopsPersistedReducer,
    products: productsPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export default store;
