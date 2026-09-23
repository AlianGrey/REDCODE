import './Navigation.scss';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/icons/small_logo.svg';


function Navigation() {
  return (    
    <nav className="navigation">
      <div className="container">
          <div className='navigation__content'>
              <div className='navigation__logo'>
                <NavLink to="/" className="logo">
                  <img src={logo} alt="REDCODE Logo" />
                </NavLink>
              </div>
              <a href="tel:+79635371116" className="navigation__phone">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+7 (963) 537-11-16</span>
              </a>
              <div className="navigation__menu">
                  <NavLink to="/services">Услуги</NavLink>
                  <NavLink to="/about">О нас</NavLink>
                  <NavLink to="/portfolio">Портфолио</NavLink>
                  <NavLink to="/contact">Контакты</NavLink>
              </div>
          </div>
      </div>
    </nav>
  );
}

export default Navigation;