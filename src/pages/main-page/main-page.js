import { ReactComponent as WelcomeImage } from './welcome.svg';
import { useTranslation } from 'react-i18next';
import './main-page.scss';

function MainPage() {
  const { t } = useTranslation();

  return (
    <div className="main-page">
      <div className="main-page__title">{ t('welcome') }</div>
      <div className="main-page__img">
        <WelcomeImage />
      </div>
    </div>
  )
}

export default MainPage;
