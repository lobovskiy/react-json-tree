import { render, screen } from '@testing-library/react';

import Spinner from './spinner';

describe('Spinner', () => {
  test('renders Logo component', () => {
    render(<Spinner size="small" />);

    screen.debug();
  });
});
