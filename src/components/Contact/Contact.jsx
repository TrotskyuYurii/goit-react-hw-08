import css from "../Contact/Contact.module.css";
import { HiUser, HiPhone } from "react-icons/hi";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.ContactLi}>
      <div>
        <p className={css.TextPage}>
          <HiUser /> {name}
        </p>
        <p className={css.TextPage}>
          <HiPhone /> {number}
        </p>
      </div>
      <div>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
