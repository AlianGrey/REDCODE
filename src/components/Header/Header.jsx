import logo from '../../assets/images/logo.svg';
import Navigation from '../Navigation/Navigation.jsx';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Navigation />
      <div className="header__content">
          <div className="container">
            <Link to="/" className="logo">
                <img src={logo} alt="REDCODE Logo" />
            </Link>
            <div className="header__slogan">
                <p>СОЗДАЁМ САЙТЫ С ХАРАКТЕРОМ</p>
                <p>И ВСЕГДА ОСТАЁМСЯ</p>
                <p className="header__slogan-tail"></p>
            </div>
          </div>
      </div>
    </header>
  );
}

export default Header;