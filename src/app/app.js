import { Routes, Route } from 'react-router-dom';
import LanguageSwitcher from '../components/language-switcher';
import Logo from '../components/logo';
import Menu from '../components/menu';
import { MainPage } from '../pages';
import { configMenu } from '../config';
import './app.scss';

function App() {
  const appRoutes = configMenu.items.map((item, i) => {
    return (
      <Route key={ i } path={ `/${item.url}` } element={ item.page } />
    )
  });

  return (
    <div className="family-app">
      <div className="family-app__language-switcher">
        <LanguageSwitcher />
      </div>
      <div className="family-app__container">
        <div className="family-app__menu">
          <Logo />
          <Menu />
        </div>
        <div className="family-app__content">
          <Routes>
            <Route path='/' element={ <MainPage /> } />
            { appRoutes }
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
