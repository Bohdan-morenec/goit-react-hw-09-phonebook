import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./ContactsFilter.module.scss";
import * as actions from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contact-selectors";

const ContactsFilter = ({ filterContactState, filter }) => {
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

ContactsFilter.propTypes = {
  filterContactState: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  filterContactState: (e) =>
    dispatch(actions.filterContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
