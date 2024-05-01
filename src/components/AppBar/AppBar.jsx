import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import clsx from "clsx";
import css from "./AppBar.module.css";

const AppBar = ({ isLoggedIn }) => {
  const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav getNavLinkClassName={getNavLinkClassName} />}
      </nav>
    </header>
  );
};

export default AppBar;

