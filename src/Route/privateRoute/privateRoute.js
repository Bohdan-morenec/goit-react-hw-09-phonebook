import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getUserInformation } from "../../redux/authorization/authorization-selectors";

const PrivateRoute = ({ redirect, children, ...routeProps }) => {
  const authorizations = useSelector(getUserInformation);
  return (
    <Route {...routeProps}>
      {authorizations ? children : <Redirect to={redirect} />}
    </Route>
  );
};

export default PrivateRoute;
