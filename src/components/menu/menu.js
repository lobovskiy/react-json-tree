import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { menuConfig } from '../../config';
import './menu.scss';

function Menu() {
  const { pathname } = useLocation();

  const { t } = useTranslation();

  const menu = menuConfig.items.map(item => {
    let menuItemClass = null;
    if (pathname === `/${item.url}`) {
      menuItemClass = "nav__item nav__item_active";
    } else {
      menuItemClass = "nav__item";
    }

    const iconsCatalog = require(`../../assets/img/icons/${item.icon}`);

    return (
      <Link to={`/${item.url}`} className={menuItemClass}>
        <div className="nav__item-bg"></div>
        <div className="nav__item-img nav__item-img_violet"><img src={iconsCatalog} alt='img' /></div>
        <div className="nav__item-text">{t(item.text)}</div>
      </Link>
    )
  });
  
  return (
    <div className="nav">
      {menu}
    </div>
  );
}

export default Menu;