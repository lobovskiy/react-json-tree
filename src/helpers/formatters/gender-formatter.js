function setGenderFormat(cell, key) {
  let className = 'family-app__gender-highlight';
  let classModificator = `${className}_`;

  switch (cell) {
    case "Male":
      classModificator += 'male';
      break;
    case "Female":
      classModificator += 'female';
      break;
    case "Polygender":
      classModificator += 'polygender';
      break;
    case "Bigender":
      classModificator += 'bigender';
      break;
    case "Non-binary":
      classModificator += 'nonbinary';
      break;
    case "Genderfluid":
      classModificator += 'genderfluid';
      break;
    case "Agender":
      classModificator += 'agender';
      break;
    case "Genderqueer":
      classModificator += 'genderqueer';
      break;
    default:
      break;
  }

  return (
    <div className={ `${className} ${classModificator}` } key={ key }>
      { cell }
    </div>
  );
}

export { setGenderFormat };
