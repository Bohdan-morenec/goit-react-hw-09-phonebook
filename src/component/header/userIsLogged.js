import { connect } from "react-redux";

import { userName } from "../../redux/authorization/authorization-selectors";
import { logout } from "../../redux/authorization/autorization-operations";

import styles from "./header.module.scss";

const UserLogged = ({ contactsItems, logout }) => {
  return (
    <div>
      <div>
        <h2 className={styles.nameUser}>{contactsItems}</h2>
        <button className={styles.hederButtonLogout} onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contactsItems: userName(state),
});

const mapDispatchToProps = {
  logout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogged);
