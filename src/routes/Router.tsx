/*
Router component defines the app routes and handles theme switching for dark mode
 */

import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../utils/theme"; 
import { RootState } from "../store/store"; 
import CreateEmployee from "../pages/CreateEmployee";
import NewHome from "../pages/NewHome";
import Error from "../pages/Error";
import EmployeeList from "../pages/EmployeeList";

export default function Router() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ThemeProvider>
  );
}