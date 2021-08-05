// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contact-selectors";

import styles from "./ContactsFilter.module.scss";

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const filterContactState = (e) =>
    dispatch(actions.filterContact(e.currentTarget.value));

  return (
    <input
      className={styles.lable}
      onChange={filterContactState}
      value={filter}
      tupe="text"
      name="filter"
      title="Поиск контактов"
    />
  );
};

// ContactsFilter.propTypes = {
//   filterContactState: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };

export default ContactsFilter;
