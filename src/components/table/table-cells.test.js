import { render, screen } from '@testing-library/react';
import TableCells from './table-cells';
import { configTable } from '../../config';

describe('TableCells', () => {
  const row = {
    id: 1,
    firstName: "Kosya",
    lastName: "Jorik",
    gender: "Genderfluid"
  };

  test('renders TableCells component', () => {
    render(<TableCells row={ row } configColumns={ configTable.columns } />);

    expect(screen.getByText('Kosya')).toBeInTheDocument();    // explicit assertion
    screen.getByText('Kosya');                                // implicit assertion
    expect(screen.queryByText('1')).toBeNull();               // asserting that an element isn't there using queryBy
    expect(screen.getByText('Genderfluid')).toHaveClass('family-app__gender-highlight', 'family-app__gender-highlight_genderfluid');
  });
});
