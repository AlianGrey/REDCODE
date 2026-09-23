import logo from '../../assets/images/logo.svg';
import Navigation from '../Navigation/Navigation.jsx';
import { Link } from 'react-router-dom';
import './HomeHeader.scss';

function HomeHeader() {
  return (
    <header className="homeheader">
      <Navigation />
      <div className="homeheader__content">
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

export default HomeHeader;