import i18n from '../../utils/i18n';
import { withNamespaces } from 'react-i18next';
import Menu from '../menu';
import Content from '../content';
import './app.scss';

function App({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="App">
      <div className="container">
        <div className='app-menu'>
          <Menu/>
        </div>
        <div className='app-content'>
          <Content/>
        </div>   
        <div>
          <button onClick={() => changeLanguage('ru')}>ru</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(App);
