import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import EmployeeList from "../pages/EmployeeList";
import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import employeeReducer from "../store/employeesSlice";
import { store } from "../store/store";
import themeReducer from "../store/themeSlice";

const setup = () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <EmployeeList />
      </MemoryRouter>
    </Provider>
  );
};

describe("EmployeeList Component", () => {
  it("should render the title and the create employee button", () => {
    setup()
    expect(screen.getByText("CURRENT EMPLOYEES")).toBeInTheDocument();
    expect(screen.getByTestId("create-employee-button")).toBeInTheDocument();
  });

  it("should render the title of the columns in the DataGrid", () => {
    setup()
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("Date of Birth")).toBeInTheDocument();
    expect(screen.getByText("Start Date")).toBeInTheDocument();
    expect(screen.getByText("Street")).toBeInTheDocument();
    expect(screen.getByText("City")).toBeInTheDocument();
    expect(screen.getByText("State")).toBeInTheDocument();
    expect(screen.getByText("Zip Code")).toBeInTheDocument();
    expect(screen.getByText("Department")).toBeInTheDocument();
  });

  it("should render the employee data in the DataGrid", () => {
    const initialState = {
      employees: {
        employees: [
          {
            firstName: "ObiWan",
            lastName: "Kenobi",
            dateOfBirth: "1990-01-01",
            startDate: "2020-01-01",
            street: "123 Main Street",
            city: "Tatooine",
            state: "Outer Rim",
            zipCode: "12345",
            department: "Legal",
          }
        ]
      }, theme: { isDarkMode: false },
    };

    const storeForDataTest = configureStore({
      reducer: {
        employees: employeeReducer,
        theme: themeReducer,
      },
      preloadedState: initialState,
    });

    render(
      <Provider store={storeForDataTest}>
        <MemoryRouter>
          <EmployeeList />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText("ObiWan")).toBeInTheDocument();
    expect(screen.getByText("Kenobi")).toBeInTheDocument();
    expect(screen.getByText("1990-01-01")).toBeInTheDocument();
    expect(screen.getByText("2020-01-01")).toBeInTheDocument();
    expect(screen.getByText("123 Main Street")).toBeInTheDocument();
    expect(screen.getByText("Tatooine")).toBeInTheDocument();
    expect(screen.getByText("Outer Rim")).toBeInTheDocument();
    expect(screen.getByText("12345")).toBeInTheDocument();
    expect(screen.getByText("Legal")).toBeInTheDocument();
  });

  it("should navigate to the create employee page when the create employee button is clicked", () => {
    setup();

    const createEmployeeButton = screen.getByTestId("create-employee-button");
    userEvent.click(createEmployeeButton);

    waitFor(() => {
      expect(window.location.pathname).toBe("/create-employee");
    });
  });
});
