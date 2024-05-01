
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css"; 

const AuthNav = () => {
  return (
    <nav>
      {/* <NavLink to="/registration" className={css.navLink} activeClassName={css.active}> */}
      <NavLink to="/registration" className={css.navLink}>
        Registration
      </NavLink>
      <NavLink to="/login" className={css.navLink}>
      {/* <NavLink to="/login" className={css.navLink} activeClassName={css.active}> */}
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
