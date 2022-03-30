import i18n from '../../locales/i18n';
import { configLanguages } from '../../config';
import './language-switcher.scss';


function LanguageSwitcher() {
  const handleChangeLanguage = lng => i18n.changeLanguage(lng);

  const languagePanel = configLanguages.map((lang, i) => {
    const language = typeof lang === 'object' ? lang.locale : lang;
    const flagIcon = require(`../../assets/img/icons/${typeof lang === 'object' ? lang.icon : `flag-${lang}.png`}`);

    return (
      <button key={ i } style={{backgroundImage: `url(${flagIcon})`}} onClick={ () => handleChangeLanguage(language) }></button>
    )
  })

  return (
    <div className="language-panel">
      { languagePanel }
    </div>
  );
}

export default LanguageSwitcher;
