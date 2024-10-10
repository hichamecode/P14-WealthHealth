import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import EmployeeList from "../pages/EmployeeList";


export default function Router () {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/employee-list' element={<EmployeeList />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

