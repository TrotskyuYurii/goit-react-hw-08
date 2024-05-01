import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <AppBar isLoggedIn={isLoggedIn} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
