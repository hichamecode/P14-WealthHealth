import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import NewHome from "../pages/NewHome";

describe("NewHome component", () => {
  test("renders the create employee and employee list links", () => {
    render(
      <MemoryRouter>
        <NewHome />
      </MemoryRouter>
    );

    // Vérifie si les liens sont bien rendus
    expect(screen.getByRole('link', { name: /create employee/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /employee list/i })).toBeInTheDocument();
  });

  test("navigates to /create-employee when 'Create Employee' is clicked", async () => {
    const user = userEvent.setup();
    
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/create-employee" element={<div>Create Employee Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    await user.click(screen.getByRole('link', { name: /create employee/i }));

    expect(screen.getByText('Create Employee Page')).toBeInTheDocument();
  });

  test("navigates to /employee-list when 'Employee List' is clicked", async () => {
    const user = userEvent.setup();
    
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/employee-list" element={<div>Employee List Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    await user.click(screen.getByRole('link', { name: /employee list/i }));

    expect(screen.getByText('Employee List Page')).toBeInTheDocument();
  });
});