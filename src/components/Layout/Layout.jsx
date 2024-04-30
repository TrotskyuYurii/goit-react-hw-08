import { useDispatch } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

import css from "./Layout.module.css";


const Layout = ({ children }) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
    }

    const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

    const isLoggedIn  = useSelector(selectIsLoggedIn);
    const userDate    = useSelector(selectUser);

  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={getNavLinkClassName}>
            Home
          </NavLink>
          {isLoggedIn ? <><NavLink to="/contacts" className={getNavLinkClassName}>
            Contacts
          </NavLink>
          <div>
            <span>Welcome, {userDate.email} </span>
            <button onClick={handleLogout} type="button">Logout</button>
          </div>
          </>
          
          :
          
          <><NavLink to="/registration" className={getNavLinkClassName}>
            Registration
          </NavLink>
          <NavLink to="/login" className={getNavLinkClassName}>
            Login
          </NavLink>          
          </> }
          
          
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
