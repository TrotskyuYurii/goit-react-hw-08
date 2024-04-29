import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./LoginPage.module.css"

const LoginPage = () => {

  const FORM_INITIAL_VALUES = {
    email: "",
    password: "",
  };


  const userSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid email!").required("Email is required!"),
    password: Yup.string()
      .required("User password is required!")
      .max(30, `Password must be less than 30 characters!`)
      .min(3, "Password must be more than 3 characters!"),
  });

  const loginUser = (values) => {
    console.log(values);
  };

  return (
    <div>
    <h1>Login Page</h1>
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={loginUser}
      validationSchema={userSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.formFormik}>
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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register now"}
          </button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default LoginPage