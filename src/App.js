import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { logger } from "./redux/contacts/contact-selectors";
import { loggerAuthorization } from "./redux/authorization/authorization-selectors";
import { currentUser } from "./redux/authorization/autorization-operations";
import { Preloader } from "./options/Preloader/Preloader";

import { Switch, Redirect } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import PrivateRoute from "./Route/privateRoute/privateRoute";
import PublicRoute from "./Route/publicRoute/publicRoute";

import Header from "./component/Header/Header";

const PhoneBook = lazy(() =>
  import("./Route/PhoneBook" /* webpackChunkName: "PhoneBook" */)
);

const Register = lazy(() =>
  import("./Route/Register/Register" /* webpackChunkName: "Register" */)
);

const Login = lazy(() =>
  import("./Route/SingIn/SingIn" /* webpackChunkName: "Login" */)
);

const App = () => {
  const dispatch = useDispatch();

  const loggerContacts = useSelector(logger);
  const loggeAtAuthorization = useSelector(loggerAuthorization);

  useEffect(() => {
    const getCurrentUser = () => dispatch(currentUser());
    getCurrentUser();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Suspense fallback={<Preloader />}>
        <Switch>
          <PublicRoute path="/register" restricted redirect="/">
            <Register />
          </PublicRoute>

          <PublicRoute path="/Login" restricted redirect="/">
            <Login />
          </PublicRoute>

          <PrivateRoute path="/" redirect="/Login">
            <PhoneBook />
          </PrivateRoute>

          <Redirect to="/login" />
        </Switch>
      </Suspense>

      {loggerContacts && <Preloader />}
      {loggeAtAuthorization && <Preloader />}
    </div>
  );
};

export default App;
