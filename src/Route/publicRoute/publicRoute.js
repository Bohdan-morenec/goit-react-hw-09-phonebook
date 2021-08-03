import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { getUserInformation } from "../../redux/authorization/authorization-selectors";

const PublicRoute = ({
  component: Component,
  authorizations,
  redirect,
  ...routoProps
}) => (
  <Route
    {...routoProps}
    render={(props) =>
      authorizations && routoProps.restricted ? (
        <Redirect to={redirect} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  authorizations: getUserInformation(state),
});

export default connect(mapStateToProps)(PublicRoute);
