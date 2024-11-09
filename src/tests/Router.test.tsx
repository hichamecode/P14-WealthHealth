import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Router from '../routes/Router'

// test for the routing logic in the application, all components are mocked
vi.mock('../pages/NewHome', () => ({
  default: () => <div data-testid='home'>Home Page</div>,
}));
vi.mock('../pages/CreateEmployee', () => ({
  default: () => <div data-testid='create-employee'>Create Employee Page</div>,
}));
vi.mock('../pages/EmployeeList', () => ({
  default: () => <div data-testid='employee-list'>Employee List Page</div>,
}));
vi.mock('../pages/Error', () => ({
  default: () => <div data-testid='404'>Error Page</div>,
}))

describe('<Router>', () => {
  const setup = (route: string) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Provider store={store}>
          <Router />
        </Provider>
      </MemoryRouter>
    );
  };

  it('should render Home component for the root route', async () => {
    setup('/');

    await waitFor(() => expect(screen.getByTestId('home')).toBeInTheDocument());
  });

  it('should render CreateEmployee component for the /create-employee route', async () => {
    setup('/create-employee');

    await waitFor(() =>
      expect(screen.getByTestId('create-employee')).toBeInTheDocument()
    );
  });

  it('should render EmployeeList component for the /employee-list route', async () => {
    setup('/employee-list');

    await waitFor(() =>
      expect(screen.getByTestId('employee-list')).toBeInTheDocument()
    );
  });

  it('should render Error component for unknown routes', async () => {
    setup('/*');

    await waitFor(() => expect(screen.getByTestId('404')).toBeInTheDocument());
  });
});
