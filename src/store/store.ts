/**
 * Redux store configuration for the app
 */

import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import employeesSlice from "./employeesSlice";
import addressReducer from "./addressSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    employees: employeesSlice,
    address: addressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
