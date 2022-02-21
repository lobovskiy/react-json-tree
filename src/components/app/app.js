import { Routes, Route } from 'react-router-dom';
import i18n from '../../utils/i18n';
import Logo from '../logo';
import Menu from '../menu';
import { MainPage } from '../pages';
import { configMenu } from '../../config';
import './app.scss';

function App() {
  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng);
  }

  const appRoutes = configMenu.items.map((item, i) => {
    return (
      <Route key={ i } path={ `/${item.url}` } element={ item.page } />
    )
  });

  return (
    <div className="App">
      <div className="change-language">
        <button onClick={ () => handleChangeLanguage('ru') }>ru</button>
        <button onClick={ () => handleChangeLanguage('en') }>en</button>
      </div>
      <div className="container">
        <div className="app-menu">
          <Logo />
          <Menu />
        </div>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          { appRoutes }
        </Routes>
      </div>
    </div>
  );
}

export default App;
