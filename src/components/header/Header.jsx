import headerLogo from "../../images/header-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={headerLogo} alt="header-logo" className="header__logo" />
      <nav className="navbar">
        <ul className="navlist">
          <li className="navlist__item">
            <a href="#" className="navlist__link">
              Characters
            </a>
          </li>
          <li className="navlist__item">
            <a href="#" className="navlist__link">
              Episodes
            </a>
          </li>
          <li className="navlist__item">
            <a href="#" className="navlist__link">
              Locations
            </a>
          </li>
          <li className="navlist__item">
            <a href="#" className="navlist__link">
              My Episodes
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
