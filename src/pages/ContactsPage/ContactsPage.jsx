import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import { selectPhonebookIsLoading, selectPhonebookContacts, selectPhonebookIsError } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Contact from "../../components/Contact/Contact";
import ContactForm from "../../components/ContactForm/ContactForm";

import css from "./ContactsPage.module.css"




const ContactsPage = () => {

  const dispatch = useDispatch(); 
  const isLoading = useSelector(selectPhonebookIsLoading);
  const isError = useSelector(selectPhonebookIsError);
  const contacts = useSelector(selectPhonebookContacts);
  // const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
   dispatch(fetchContacts()) 
  }, [dispatch])

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  

  return (
    <div>
       <ContactForm />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {!isLoading && !isError && contacts.length === 0 && <h2>There are no contacts</h2>}

      <ul className={css.ContactListUl}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>

    </div>
  )
}

export default ContactsPage