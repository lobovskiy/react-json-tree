import { Routes, Route } from 'react-router-dom';
import i18n from '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import Menu from '../menu';
import { MainPage, FamilyTablePage } from '../pages';
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
          <Menu/>
        </div>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/table' element={<FamilyTablePage/>} />
        </Routes>  
      </div>
    </div>
  );
}

export default App;
