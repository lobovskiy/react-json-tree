import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchFamily } from '../../store/reducer';
import Logo from '../logo';
import './menu.scss';

function Menu() {
  const dispatch = useDispatch();
  const { t, ready } = useTranslation('translation', { keyPrefix: 'very.deeply.nested' },  { returnObjects: true });
  // console.log(t);
  const translation = t('table');
  console.log(translation, ready);
  
  return (
    <>
      <Logo/>
      <div className="nav">
        <Link to={'/table'} className="nav__item" onClick={() => dispatch(fetchFamily())}>{t('key')}</Link>
      </div>
    </>
  );
}

export default Menu;