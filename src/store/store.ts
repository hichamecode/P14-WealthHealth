
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
// import employeesReducer from "./employeesSlice";


export const store = configureStore({
  reducer: {
    theme: themeSlice,
    // employees: employeesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

