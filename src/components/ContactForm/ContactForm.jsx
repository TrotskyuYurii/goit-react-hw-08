import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux"; 
import { addContact } from '../../redux/contacts/operations';

import css from "../ContactForm/ContactForm.module.css";


const ContactForm = () => {
  const dispatch = useDispatch(); 

  const FORM_INITIAL_VALUES = {
    userName: "",
    userNumber: "",
  };

  const handleSubmit = (values, actions) => {
    
    const newContact = {
      name: values.userName,
      number: values.userNumber,
    };
    
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const mailBoxSchema = Yup.object().shape({
    userNumber: Yup.string()
      .required("Number is required!")
      .max(30, `Number must be less than 30 characters!`)
      .min(3, "Number must be more than 3 characters!"),
    userName: Yup.string()
      .required("User name is required!")
      .max(30, `Username must be less than 30 characters!`)
      .min(3, "Username must be more than 3 characters!"),
  });




  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={mailBoxSchema}
    >
      <Form className={css.formFormik}>
        <h3>Add new contact</h3>
        <label>
          <span>User name:</span>
          <br />
          <Field type="text" name="userName" placeholder="name" />
          <ErrorMessage component="p" name="userName" />
        </label>{" "}
        <br />
        <label>
          <span>User number:</span>
          <br />
          <Field type="number" name="userNumber" placeholder="0971234567" />
          <ErrorMessage component="p" name="userNumber" />
        </label>{" "}
        <br />
        <br />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
