import { NavLink, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Layout.module.css";


const Layout = ({ children }) => {

    const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

    const isLoggedIn  = useSelector(selectIsLoggedIn);
    console.log("isLoggedIn", isLoggedIn);

  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={getNavLinkClassName}>
            Home
          </NavLink>
          {isLoggedIn ? <><NavLink to="/contacts" className={getNavLinkClassName}>
            Contacts
          </NavLink></>:<><NavLink to="/registration" className={getNavLinkClassName}>
            Registration
          </NavLink>
          <NavLink to="/login" className={getNavLinkClassName}>
            Login
          </NavLink></> }
          
          
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
