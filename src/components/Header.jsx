import Logo from "../assets/Logo.webp";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__layout">
        <img src={Logo} alt="" className="header__img" />
        <nav className="header__nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>
            <li><Link to="/Order">Order online</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;