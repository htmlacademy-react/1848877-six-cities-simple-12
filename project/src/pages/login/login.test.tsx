import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-router';
import Login from './login';
import { configureMockStore } from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { AppRoute } from '../../router/RoutePath';
import { AuthorizationStatus, NameSpace } from '../../constants/constants';

const mockStore = configureMockStore();

describe('Component: Login', () => {
  it('should render correctly', async () => {
    const history = createMemoryHistory();
    history.push(AppRoute.Login);
    const initialState = {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Unknown,
      }
    };

    render(
      <Provider store={mockStore(initialState)}>
        <HistoryRouter history={history}>
          <Login />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('login'), 'keks');
    await userEvent.type(screen.getByTestId('password'), '123456a');

    expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456a/i)).toBeInTheDocument();
  });
});
