// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "../../redux/contacts/contact-operations";
import { filteredArrayContact } from "../../redux/contacts/contact-selectors";

import style from "./ContactList.module.scss";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContact = useSelector(filteredArrayContact);

  const deleteContact = (id) => dispatch(actions.deleteContact(id));

  useEffect(() => {
    const fetchContact = () => dispatch(actions.fetchContact());

    fetchContact();
  }, [dispatch]);

  return (
    <ul className={style.list}>
      {filteredContact.map(({ name, number, id }) => (
        <li className={style.listItem} key={id}>
          <p className={style.name}>
            {name}: <span className={style.number}>{number}</span>
          </p>
          <button
            className={style.button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   deleteContact: PropTypes.func.isRequired,
//   filteredArrayContact: PropTypes.array.isRequired,
// };

export default ContactList;
