import './Navigation.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


function Navigation() {
  return (    
    <nav className="navigation">
        <a href="tel:+79999999999" className="navigation__phone">
            <FontAwesomeIcon icon={faPhone} />
            <span>+7 (999) 999-99-99</span>
        </a>
        <div className="navigation__menu">
            <Link to="/services">Услуги</Link>
            <Link to="/about">О нас</Link>
            <Link to="/portfolio">Портфолио</Link>
            <Link to="/contact">Котакты</Link>
        </div>
    </nav>
  );
}

export default Navigation;