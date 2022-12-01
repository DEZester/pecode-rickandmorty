import headerLogo from '../../../images/header-logo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const activeLink = ({ isActive }) =>
    isActive ? `navlist__link navlist__link-active` : `navlist__link`;
  return (
    <div className="header">
      <img src={headerLogo} alt="header-logo" className="header__logo" />
      <nav className="navbar">
        <ul className="navlist">
          <li className="navlist__item">
            <NavLink to="/" className={activeLink}>
              Characters
            </NavLink>
          </li>
          <li className="navlist__item">
            <NavLink to={'/episodes'} className={activeLink}>
              Episodes
            </NavLink>
          </li>
          <li className="navlist__item">
            <NavLink to={'/locations'} className={activeLink}>
              Locations
            </NavLink>
          </li>
          <li className="navlist__item">
            <NavLink to={'/myEpisodes'} className={activeLink}>
              My Episodes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
