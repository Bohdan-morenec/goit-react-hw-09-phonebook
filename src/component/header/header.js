import { useSelector } from "react-redux";
import { getUserInformation } from "../../redux/authorization/authorization-selectors";

import UserLogged from "./userIsLogged";
import UserNotLogged from "./UserNotLogged";

import styles from "./header.module.scss";

const Header = () => {
  const UserAction = useSelector(getUserInformation);
  return (
    <div className={styles.headerbox}>
      <div className={styles.boxLink}>
        {UserAction ? <UserLogged /> : <UserNotLogged />}
      </div>
    </div>
  );
};

export default Header;
