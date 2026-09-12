import './Navigation.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


function Navigation() {
  return (    
    <nav className="navigation">
      <div className="container">
          <div className='navigation__content'>
              <a href="tel:+79635371116" className="navigation__phone">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+7 (963) 537-11-16</span>
              </a>
              <div className="navigation__menu">
                  <Link to="/services">Услуги</Link>
                  <Link to="/about">О нас</Link>
                  <Link to="/portfolio">Портфолио</Link>
                  <Link to="/contact">Контакты</Link>
              </div>
          </div>
      </div>
    </nav>
  );
}

export default Navigation;