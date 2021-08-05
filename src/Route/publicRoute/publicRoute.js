import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { getUserInformation } from "../../redux/authorization/authorization-selectors";

const PublicRoute = ({ redirect, children, ...routoProps }) => {
  const authorizations = useSelector(getUserInformation);

  return (
    <Route {...routoProps}>
      {authorizations && routoProps.restricted ? (
        <Redirect to={redirect} />
      ) : (
        children
      )}
    </Route>
  );
};

export default PublicRoute;
