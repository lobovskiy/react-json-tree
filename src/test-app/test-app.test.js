import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './test-app';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    screen.getByRole('');
  });
});
