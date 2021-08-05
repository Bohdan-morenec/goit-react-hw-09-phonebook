import { useSelector, useDispatch } from "react-redux";

import { userName } from "../../redux/authorization/authorization-selectors";
import { logout } from "../../redux/authorization/autorization-operations";

import styles from "./header.module.scss";

const UserLogged = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(userName);

  const a = () => dispatch(logout());

  return (
    <div>
      <div>
        <h2 className={styles.nameUser}>{contactsItems}</h2>
        <button className={styles.hederButtonLogout} onClick={a}>
          logout
        </button>
      </div>
    </div>
  );
};

export default UserLogged;
