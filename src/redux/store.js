import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../redux/slices/locationSlice"

export const store = configureStore({
  reducer: {
    location: locationReducer
  },
});
