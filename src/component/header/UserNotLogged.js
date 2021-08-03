import { NavLink } from "react-router-dom";

import styles from "./header.module.scss";

const UserNotLogged = () => {
  return (
    <div>
      <NavLink
        className={styles.headerLink}
        activeClassName={styles.activeLink}
        to="/Login"
      >
        sing in
      </NavLink>
      <NavLink
        className={styles.headerLink}
        activeClassName={styles.activeLink}
        to="/register"
      >
        register
      </NavLink>
    </div>
  );
};

export default UserNotLogged;
