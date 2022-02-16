import logoImage from './logo.svg';
import './logo.scss';

function Logo() {
  return (
    <div className="logo">
      <div className="logo__img"><img src={logoImage} alt="logo" /></div>
      <div className="logo__text">Base</div>
    </div>
  )
}

export default Logo;