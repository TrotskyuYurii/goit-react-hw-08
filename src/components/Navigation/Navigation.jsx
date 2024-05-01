// Navigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css"; // Імпортуйте свій CSS файл

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      {/* <NavLink to="/" className={css.navLink} activeClassName={css.active}> */}
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.navLink}>
          {/* <NavLink to="/contacts" className={css.navLink} activeClassName={css.active}></NavLink> */}
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
