import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../store-family';
import '../locales/i18n';
import App from './app';

describe('application', () => {

  test('renders application', async () => {
    render(
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <App />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText('Table'));

    expect(await screen.findByText('Gabbie', undefined, { timeout: 1500 })).toBeInTheDocument();

    userEvent.click(screen.getByText('Base'));

    expect(screen.queryByText('Gabbie')).toBeNull();
  });
});
