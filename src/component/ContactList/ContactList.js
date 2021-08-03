import PropTypes from "prop-types";
import { connect } from "react-redux";
import style from "./ContactList.module.scss";
import * as actions from "../../redux/contacts/contact-operations";
import { Component } from "react";
import { filteredArrayContact } from "../../redux/contacts/contact-selectors";

class ContactList extends Component {
  componentDidMount = () => {
    this.props.fetchContact();
  };

  render() {
    return (
      <ul className={style.list}>
        {this.props.filteredArrayContact.map(({ name, number, id }) => (
          <li className={style.listItem} key={id}>
            <p className={style.name}>
              {name}: <span className={style.number}>{number}</span>
            </p>
            <button
              className={style.button}
              type="button"
              onClick={() => this.props.deleteContact(id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filteredArrayContact: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  filteredArrayContact: filteredArrayContact(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(actions.deleteContact(id)),
  fetchContact: () => dispatch(actions.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
