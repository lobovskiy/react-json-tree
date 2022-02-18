import { Routes, Route } from 'react-router-dom';
import i18n from '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import Logo from '../logo';
import Menu from '../menu';
import { MainPage, FamilyTablePage } from '../pages';
import { menuConfig } from '../../config';
import './app.scss';

function App() {
const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="App">
      <div className="change-language">
        <button onClick={() => changeLanguage('ru')}>ru</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
      <div className="container">
        <div className="app-menu">
          <Logo/>
          <Menu/>
        </div>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          {/* что-то придумать с конфигом: */}
          <Route path={`/${menuConfig.items[0].url}`} element={<FamilyTablePage/>} />
        </Routes>  
      </div>
    </div>
  );
}

export default App;
