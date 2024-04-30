import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectPhonebookIsLoading, selectPhonebookContacts, selectPhonebookIsError } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Contact from "../../components/Contact/Contact";

import css from "./ContactsPage.module.css"




const ContactsPage = () => {

  const dispatch = useDispatch(); 
  const isLoading = useSelector(selectPhonebookIsLoading);
  const isError = useSelector(selectPhonebookIsError);
  const contacts = useSelector(selectPhonebookContacts);

  useEffect(() => {
   dispatch(fetchContacts()) 
  }, [dispatch])

  const onDeleteContact = (contactId) => {
    // dispatch(deleteContact(contactId));
  };

  // const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
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