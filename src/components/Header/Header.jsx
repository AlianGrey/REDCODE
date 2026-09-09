import logo from '../../assets/images/logo.svg';
import onlink from '../../assets/images/header_onlink.png';
import Navigation from '../Navigation/Navigation.jsx';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
        <Navigation />
        <div className="header__content">
            <Link to="/" className="logo">
                <img src={logo} alt="REDCODE Logo" />
            </Link>
            <div className="header__slogan">
                <p>СОЗДАЁМ САЙТЫ С ХАРАКТЕРОМ</p>
                <p>И ВСЕГДА ОСТАЁМСЯ <img src={onlink} alt="всегда на связи" /></p>
            </div>
      </div>
    </header>
  );
}

export default Header;