import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import {
  selectPhonebookIsLoading,
  selectPhonebookContacts,
  selectPhonebookIsError,
} from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Contact from "../../components/Contact/Contact";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

import css from "./ContactsPage.module.css";

  const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectPhonebookIsLoading);
  const isError = useSelector(selectPhonebookIsError);
  const contacts = useSelector(selectPhonebookContacts);


  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter((cont) => {
    const name = cont.name.toLowerCase();
    const number = cont.number.toString().toLowerCase();
    const filterLowerCase = filter.toLowerCase();
  
    return name.includes(filterLowerCase) || number.includes(filterLowerCase);
  });



  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <div className={css.ContactForm}>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {!isLoading && !isError && contacts.length === 0 && (
        <h2>There are no contacts</h2>
      )}

      <ul className={css.ContactListUl}>
        {filteredContacts.map((contact) => (
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
  );
};

export default ContactsPage;
