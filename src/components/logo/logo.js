import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from './logo.svg';
import './logo.scss';


function Logo() {
  return (
    <Link to={ '/' } className="logo">
      <LogoImage />
      <div className="logo__text">Base</div>
    </Link>
  )
}

export default Logo;
