import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Layout.module.css";


const Layout = ({ children }) => {

    const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={getNavLinkClassName}>
            Home
          </NavLink>
          <NavLink to="/registration" className={getNavLinkClassName}>
            Registration
          </NavLink>
          <NavLink to="/login" className={getNavLinkClassName}>
            Login
          </NavLink>
          <NavLink to="/contacts" className={getNavLinkClassName}>
            Contacts
          </NavLink>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
