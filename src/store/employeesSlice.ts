import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataType from "../types/DataType";

export type stateType = {
  employees: dataType[];
};

export const initialState: stateType = {
  employees: JSON.parse(localStorage.getItem("employees") || "[]"),
};

export const createEmployeeThunk = createAsyncThunk(
  "employees/createEmployee",
  async (data: dataType, { rejectWithValue }) => {
    try {
      let employeeData = [];
      const employeesFromLocalStorage = localStorage.getItem("employees");

      if (employeesFromLocalStorage) {
        employeeData = JSON.parse(employeesFromLocalStorage);
      }

      employeeData.push(data);

      localStorage.setItem("employees", JSON.stringify(employeeData));
      return data;
    } catch (error) {
      return rejectWithValue("Failed to create employee.");
    }
  },
);

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createEmployeeThunk.fulfilled, (state, action) => {
      state.employees.push(action.payload);
    });
    builder.addCase(createEmployeeThunk.pending, (state, action) => {
      console.log("pending", state, action);
    })
    builder.addCase(createEmployeeThunk.rejected, (state, action) => {
      console.log("rejected", state, action);
    })
  },
});

export const { actions, reducer: employeeReducer } = employeeSlice;
export default employeeReducer;
