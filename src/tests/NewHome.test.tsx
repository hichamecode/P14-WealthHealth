import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import NewHome from '../pages/NewHome';

describe('<NewHome />', () => {
  const setup = () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewHome />
        </Provider>
      </MemoryRouter>
    );
  };

  it('should render the main Welcome text and subtitles', () => {
    setup();
    expect(screen.getByText('Welcome to HR NET')).toBeInTheDocument();
    expect(screen.getByText('A New Way of Managing The Human Resources System')).toBeInTheDocument();
  });

  it('should render the Create Employee card with button and icon', () => {
    setup();
    expect(screen.getByText('Create Employee')).toBeInTheDocument();
    expect(screen.getByText("You will need to provide the employee's personal information.")).toBeInTheDocument();
    expect(screen.getByTestId('AddIcon')).toBeInTheDocument();
  });

  it('should render the Employee List card with button and icon', () => {
    setup();
    expect(screen.getByText('Employee List')).toBeInTheDocument();
    expect(screen.getByText("View and manage the list of employees in the Human Resources System.")).toBeInTheDocument();
    expect(screen.getByTestId('VisibilityIcon')).toBeInTheDocument();
  });

  it('should navigate to /create-employee when clicking on Create Employee button', () => {
    setup();
    const createEmployeeButton = screen.getByTestId('AddIcon').closest('button');
    if (createEmployeeButton) {
      fireEvent.click(createEmployeeButton);
    }
    expect(screen.findByRole('heading', { name: 'CREATE EMPLOYEE' }));
  });

  it('should navigate to /employee-list when clicking on Employee List button', () => {
    setup();
    const employeeListButton = screen.getByTestId('VisibilityIcon').closest('button');
    if (employeeListButton) {
      fireEvent.click(employeeListButton);
    }
    expect(screen.findByRole('heading', { name: 'CURRENT EMPLOYEES' }));
  });
});
