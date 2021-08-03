import FormContact from "../component/FormContact";
import ContactsFilter from "../component/ContactsFilter";
import ContactList from "../component/ContactList";

import styles from "./PhoneBook.module.scss";

const PhoneBook = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>Phonebook</h1>
      <FormContact />
      <div>
        <h2 className={styles.title}>contacts</h2>
        <ContactsFilter />
        <ContactList />
      </div>
    </div>
  );
};

export default PhoneBook;
