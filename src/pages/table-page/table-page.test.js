import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store-family';
import TablePage from './table-page';

describe('TablePage', () => {

  test('renders TablePage component', async () => {
    render(
      <Provider store={store}>
        <TablePage />
      </Provider>
    );

    screen.debug();

    expect(await screen.findByText('Gabbie', undefined, { timeout: 1500 })).toBeInTheDocument();

    screen.debug();
  });
});
