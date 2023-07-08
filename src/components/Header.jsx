import Logo from "../assets/Logo.webp"

function Header() {
  return (
    <header className="header">
      <div className="header__layout">
        <img src={Logo} alt="" className="header__img" />
        <nav className="header__nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;