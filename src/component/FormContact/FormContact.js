import { v4 as uuidv4 } from "uuid";
// import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contact-operations";
import { getContacts } from "../../redux/contacts/contact-selectors";

import styles from "./FormContact.module.scss";

const FormContact = () => {
  const [nameUser, setName] = useState("");
  const [numberUser, setNuber] = useState("");

  const dispatch = useDispatch();

  const contactsItems = useSelector(getContacts);

  const addСontact = (value) => dispatch(actions.addСontact(value));

  const addFormContact = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNuber(value);
        break;

      default:
        console.log("error");
        break;
    }
  };

  const dominicToretto = () => {
    return contactsItems.find(({ name, number }) => {
      return name === nameUser || number === numberUser;
    });
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    if (dominicToretto()) {
      return alert("the same name or phone number already exists");
    }

    addСontact({
      name: nameUser,
      number: numberUser,
      id: uuidv4(),
    });

    setName("");
    setNuber("");
  };

  return (
    <form
      className={styles.transparent}
      htmlFor={uuidv4()}
      onSubmit={SubmitForm}
    >
      <div className={styles.formInner}>
        <label>
          Name
          <input
            onChange={addFormContact}
            type="text"
            value={nameUser}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={addFormContact}
            type="tel"
            value={numberUser}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={styles.button} type="submit">
          aad contact
        </button>
      </div>
    </form>
  );
};

// FormContact.propTypes = {
//   contactsItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ),
// };
// Function.defaultProps = {
//   contacts: [],
// };

// const mapStateToProps = (state) => ({
//   contactsItems: getContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   addСontact: (value) => dispatch(actions.addСontact(value)),
// });

export default FormContact;
