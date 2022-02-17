import { Link } from 'react-router-dom';
import logoImage from './logo.svg';
import './logo.scss';

function Logo() {
  return (
    <Link to={'/'} className="logo">
      <div className="logo__img"><img src={logoImage} alt="logo" /></div>
      <div className="logo__text">Base</div>
    </Link>
  )
}

export default Logo;