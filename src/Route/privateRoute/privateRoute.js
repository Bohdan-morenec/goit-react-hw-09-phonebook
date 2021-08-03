import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getUserInformation } from "../../redux/authorization/authorization-selectors";

const PrivateRoute = ({
  component: Component,
  authorizations,
  redirect,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      authorizations ? <Component {...props} /> : <Redirect to={redirect} />
    }
  />
);

const mapStateToProps = (state) => ({
  authorizations: getUserInformation(state),
});

export default connect(mapStateToProps)(PrivateRoute);
