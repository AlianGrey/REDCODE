import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { Link } from 'react-router-dom'
import './Footer.scss'


function Footer() {
  return (
    <footer className="footer">
        <div className="footer__main">
          <div className="container">
              <div className="footer__contacts">
                <a href="mailto:info@redcode.ru" className="footer__contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>info@redcode.ru</span>
                </a>
                < a href="tel:+74951234567" className="footer__contact">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+7 (495) 123-45-67</span>
                </a>
              </div>
              <div className="footer__menu">
                <Link to="/"> Главная</Link>
                <Link to="/about"> О нас</Link>
                <Link to="/contact"> Контакты</Link>
                <Link to="/services"> Услуги</Link>
                <Link to="/portfolio"> Портфолио</Link>
              </div>
            </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
              <p>&copy; 2026 REDCODE. Все права защищены.</p>
          </div>
        </div>

    </footer>
  )
}

export default Footer