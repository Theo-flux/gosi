import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../redux/slices/locationSlice";
import { zobomapApi } from "../api/zobomapApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    [zobomapApi.reducerPath]: zobomapApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(zobomapApi.middleware),
});

setupListeners(store.dispatch);
