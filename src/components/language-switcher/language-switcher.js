import i18n from '../../utils/i18n';
import { configLanguages } from '../../config';
import './language-switcher.scss';


function LanguageSwitcher() {
  const handleChangeLanguage = lng => i18n.changeLanguage(lng);

  const languagePanel = configLanguages.map((language, i) => {
    const languageIcon = require(`../../assets/img/icons/flag-${language}.png`);

    return (
      <button key={ i } style={{backgroundImage: `url(${languageIcon})`}} onClick={ () => handleChangeLanguage(language) }></button>
    )
  })

  return (
    <div className="language-panel">
      { languagePanel }
    </div>
  );
}

export default LanguageSwitcher;
