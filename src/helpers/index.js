function genderFormatter(cell) {
  let className = 'table__row-highlight';

  switch (cell) {
    case "Male":
      className += ' table__row-highlight_male';
      break;
    case "Female":
      className += ' table__row-highlight_female';
      break;
    case "Polygender":
      className += ' table__row-highlight_polygender';
      break;
    case "Bigender":
      className += ' table__row-highlight_bigender';
      break;
    case "Non-binary":
      className += ' table__row-highlight_nonbinary';
      break;
    case "Genderfluid":
      className += ' table__row-highlight_genderfluid';
      break;
    case "Agender":
      className += ' table__row-highlight_agender';
      break;
    case "Genderqueer":
      className += ' table__row-highlight_genderqueer';
      break;
    default:
      break;
  }

  return className;
}

export { genderFormatter };
