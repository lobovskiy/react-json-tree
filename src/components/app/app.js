import { Routes, Route } from 'react-router-dom';
import LanguageSwitcher from '../language-switcher';
import Logo from '../logo';
import Menu from '../menu';
import { MainPage } from '../pages';
import { configMenu } from '../../config';
import './app.scss';

function App() {
  const appRoutes = configMenu.items.map((item, i) => {
    return (
      <Route key={ i } path={ `/${item.url}` } element={ item.page } />
    )
  });

  return (
    <div className="app">
      <div className="app-language-switcher">
        <LanguageSwitcher />
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
