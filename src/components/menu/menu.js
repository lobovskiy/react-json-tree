import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../logo';
import './menu.scss';

const icon = 'icon-table.svg';
const iconsCatalog = require(`../../assets/img/icons/${icon}`);

function Menu() {
  const { pathname } = useLocation();
  let menuItemClass = "nav__item";
  if (pathname === '/table') {
    menuItemClass+= " nav__item_active";
  }

  const { t } = useTranslation();
  
  return (
    <>
      <Logo/>
      <div className="nav">
        <Link to={'/table'} className={menuItemClass}>
          <div className="nav__item-bg"></div>
          <div className="nav__item-img nav__item-img_violet"><img src={iconsCatalog} alt='img' /></div>
          <div className="nav__item-text">{t('navigation.table')}</div>
        </Link>
      </div>
    </>
  );
}

export default Menu;