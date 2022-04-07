import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { configMenu } from '../../config';
import classNames from 'classnames/bind';
import './menu.scss';


function Menu() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const menuItems = configMenu.items.map((item, i) => {

    return (
      <Link
        key={ i }
        to={ `/${ item.url }` }
        className={ classNames(
            "nav__item",
            { "nav__item_active": (pathname === `/${ item.url }`) }
          ) }
      >
        <div className="nav__item-bg"></div>
        <div className="nav__item-img nav__item-img_violet"><img src={ item.icon } alt='img' /></div>
        <div className="nav__item-text">{ t(item.text) }</div>
      </Link>
    )
  });

  return (
    <div className="nav">
      { menuItems }
    </div>
  );
}

export default Menu;
