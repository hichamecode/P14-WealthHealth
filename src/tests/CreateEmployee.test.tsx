import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import CreateEmployee from "../pages/CreateEmployee";
import { store } from "../store/store"

const setup = () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateEmployee />
      </MemoryRouter>
    </Provider>
  )
}

describe("CreateEmployee Component", () => {
  it("should render the title and the employee list button", () => {
    setup()
    expect(screen.getByText("CREATE EMPLOYEE")).toBeInTheDocument();
    expect(screen.getByTestId("employee-list-button")).toBeInTheDocument();
  })

  it("should render the form elements", () => {
    setup()
    expect(screen.getByTestId("employee-form")).toBeInTheDocument()
    expect(screen.getByTestId("first-name")).toBeInTheDocument();
    expect(screen.getByTestId("last-name")).toBeInTheDocument();
    expect(screen.getByLabelText("Date of Birth")).toBeInTheDocument()
    expect(screen.getByLabelText("Start Date")).toBeInTheDocument()
    expect(screen.getByTestId("street")).toBeInTheDocument();
    expect(screen.getByTestId("city")).toBeInTheDocument();
    expect(screen.getByTestId("state")).toBeInTheDocument();
    expect(screen.getByTestId("zip-code")).toBeInTheDocument();
    expect(screen.getByTestId("department")).toBeInTheDocument()
  });

  it("should show validation errors when required fields are empty", async () => {
    setup()
    const saveButton = screen.getByRole("button", { name: /SAVE/i });
    await userEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText(/A valid first name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/A valid last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/A valid address is required/i)).toBeInTheDocument();
      expect(screen.getByText(/A valid city is required/i)).toBeInTheDocument();
      expect(screen.getByText(/State is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Invalid zip code/i)).toBeInTheDocument();
    });
  });

  it("should submit the form with valid data", async () => {
    const mockDispatch = vi.fn();
    const { container } = render(
      <Provider store={{ ...store, dispatch: mockDispatch }}>
        <MemoryRouter>
          <CreateEmployee />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(screen.getByLabelText(/First Name/i), "John");
    await userEvent.type(screen.getByLabelText(/Last Name/i), "Doe");
    await userEvent.type(screen.getByLabelText(/Street/i), "123 Main St");
    await userEvent.type(screen.getByLabelText(/City/i), "Anytown");
    await userEvent.type(screen.getByLabelText(/State/i), "CA");
    await userEvent.type(screen.getByLabelText(/Zip Code/i), "12345");

    const department = container.querySelector('input[name="department"]');
    console.log(department)
    screen.debug()

    if (department === null) {
      throw new Error("Department input not found");
    }

    department.value = "Legal"
    expect(department).toHaveValue("Legal");

    const saveButton = screen.getByRole("button", { name: /SAVE/i });
    await userEvent.click(saveButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  it("should navigate to the Employee List page when the button 'Employee List' is clicked", async () => {
    setup()
    const EmployeeListButton = screen.getByTestId("employee-list-button")
    await userEvent.click(EmployeeListButton)
    waitFor(() => {
      expect(window.location.pathname).toBe("/create-employee");
    });
  })
});
