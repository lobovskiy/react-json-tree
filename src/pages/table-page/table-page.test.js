import { render, screen } from '@testing-library/react';
import TablePage from './table-page';
import { configTable } from '../../config';

describe('TablePage', () => {

  test('renders TablePage component', () => {
    render(<TablePage />);

    // expect(screen.getByText('Kosya')).toBeInTheDocument();    // explicit assertion
    // screen.getByText('Kosya');                                // implicit assertion
    // expect(screen.queryByText('1')).toBeNull();               // asserting that an element isn't there using queryBy
    // expect(screen.getByText('Genderfluid')).toHaveClass('family-app__gender-highlight', 'family-app__gender-highlight_genderfluid');
  });
});
