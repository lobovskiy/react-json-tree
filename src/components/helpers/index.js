function createNameFromProperty(str) {
  if (!str) return str;

  str = str.replace(/_/g, ' ');
  return str[0].toUpperCase() + str.slice(1);
}

function highlightGender(gender) {
  let divClass = "table__row-highlight"
  switch (gender) {
    case "Male":
      divClass += ' table__row-highlight_gender1';
      break;
    case "Female":
      divClass += ' table__row-highlight_gender2';
      break;
    case "Polygender":
      divClass += ' table__row-highlight_gender3';
      break;
    case "Bigender":
      divClass += ' table__row-highlight_gender4';
      break;
    case "Non-binary":
      divClass += ' table__row-highlight_gender5';
      break;
    case "Genderfluid":
      divClass += ' table__row-highlight_gender6';
      break;
    case "Agender":
      divClass += ' table__row-highlight_gender7';
      break;
    case "Genderqueer":
      divClass += ' table__row-highlight_gender8';
      break;
    default:
      break;
  }

  return <div className={divClass}>{gender}</div>;
}

export { createNameFromProperty, highlightGender };