import Navigation from '../Navigation/Navigation.jsx';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="innerheader">
      <Navigation />
    </header>
  );
}

export default Header;