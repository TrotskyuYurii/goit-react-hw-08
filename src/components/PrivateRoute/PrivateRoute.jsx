import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ children }) => {

    const isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    //Якщо юзер залогінений, то редірект на контакти інакше залишається на поточну сторінку
    isLoggedIn ? children: <Navigate to="/login" replace/> 
  )
}

export default PrivateRoute