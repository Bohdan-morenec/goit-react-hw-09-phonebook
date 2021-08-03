import { connect } from "react-redux";

import UserLogged from "./userIsLogged";
import UserNotLogged from "./UserNotLogged";
import { getUserInformation } from "../../redux/authorization/authorization-selectors";
import styles from "./header.module.scss";

const header = ({ UserAction }) => {
  return (
    <div className={styles.headerbox}>
      <div className={styles.boxLink}>
        {UserAction ? <UserLogged /> : <UserNotLogged />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  UserAction: getUserInformation(state),
});

export default connect(mapStateToProps)(header);
