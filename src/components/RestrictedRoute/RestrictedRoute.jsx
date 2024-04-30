import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ children }) => {
   
    const isLoggedIn  = useSelector(selectIsLoggedIn);


  return (
    //Якщо юзер залогінений, то редірект на контакти інакше залишається на поточну сторінку
    isLoggedIn ? <Navigate to="/contacts" replace/> : children
  )
}

export default RestrictedRoute