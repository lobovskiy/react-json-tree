function genderFormatter(gender) {
  let divClass = "table__row-highlight"
  switch (gender) {
    case "Male":
      divClass += ' table__row-highlight_male';
      break;
    case "Female":
      divClass += ' table__row-highlight_female';
      break;
    case "Polygender":
      divClass += ' table__row-highlight_polygender';
      break;
    case "Bigender":
      divClass += ' table__row-highlight_bigender';
      break;
    case "Non-binary":
      divClass += ' table__row-highlight_nonbinary';
      break;
    case "Genderfluid":
      divClass += ' table__row-highlight_genderfluid';
      break;
    case "Agender":
      divClass += ' table__row-highlight_agender';
      break;
    case "Genderqueer":
      divClass += ' table__row-highlight_genderqueer';
      break;
    default:
      break;
  }

  return <div className={divClass}>{gender}</div>;
}

export { genderFormatter };
