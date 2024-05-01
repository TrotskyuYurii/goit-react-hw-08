import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { register } from "../../redux/auth/operations";
import {selectIsError} from "../../redux/auth/selectors";

import css from "../../pages/RegistrationPage/RegistrationPage.module.css";




const RegistrationPage = () => {
  
  const dispatch = useDispatch(); 

  const FORM_INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .required("User name is required!")
      .max(30, `Username must be less than 30 characters!`)
      .min(3, "Username must be more than 3 characters!"),
    email: Yup.string()
    .email("Invalid email!").required("Email is required!"),
    password: Yup.string()
      .required("User password is required!")
      .max(30, `Password must be less than 30 characters!`)
      .min(3, "Password must be more than 3 characters!"),
  });

  const registerUser = (values) => {
    dispatch(register(values));
  };

  const isError = useSelector(selectIsError);

  return (
    <div>
      <h2>Registration Page</h2>
      {isError && <p style={{ color: 'red' }}>Whoops something went wrong. Please try another registration data</p>}
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={registerUser}
        validationSchema={userSchema}
      >
        {({ isSubmitting }) => (
          <Form className={css.formFormik}>
            <label>
              <span>User name:</span>
              <br />
              <Field type="text" name="name" placeholder="name" />
              <ErrorMessage component="p" name="name" />
            </label>{" "}
            <br />
            <label>
              <span>User email:</span>
              <br />
              <Field type="text" name="email" placeholder="myEmail@mail" />
              <ErrorMessage component="p" name="email" />
            </label>{" "}
            <br />
            <label>
              <span>User password:</span>
              <br />
              <Field type="password" name="password"/>
              <ErrorMessage component="p" name="password" />
            </label>{" "}
            <br />
            <br />
            <button type="submit">Register now</button>
            
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationPage;
