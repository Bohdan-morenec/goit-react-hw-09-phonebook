import "./App.css";

import { connect } from "react-redux";
import { logger } from "./redux/contacts/contact-selectors";
import { loggerAuthorization } from "./redux/authorization/authorization-selectors";
import { currentUser } from "./redux/authorization/autorization-operations";
import { Preloader } from "./options/Preloader/Preloader";

import { Switch, Redirect } from "react-router-dom";
import { Component, Suspense, lazy } from "react";

import PrivateRoute from "./Route/privateRoute/privateRoute";
import PublicRoute from "./Route/publicRoute/publicRoute";

import UserLogged from "./component/header/header";

const PhoneBook = lazy(() =>
  import("./Route/PhoneBook" /* webpackChunkName: "PhoneBook" */)
);

const Register = lazy(() =>
  import("./Route/Register/Register" /* webpackChunkName: "Register" */)
);

const Login = lazy(() =>
  import("./Route/SingIn/SingIn" /* webpackChunkName: "Login" */)
);

class App extends Component {
  componentDidMount = () => {
    this.props.currentUser();
  };

  render() {
    return (
      <div>
        <UserLogged />
        <Suspense fallback={<Preloader />}>
          <Switch>
            <PublicRoute
              path="/register"
              restricted
              redirect="/"
              component={Register}
            />
            <PublicRoute
              path="/Login"
              restricted
              redirect="/"
              component={Login}
            />
            <PrivateRoute path="/" redirect="/Login" component={PhoneBook} />
            <Redirect to="/login" />
          </Switch>
        </Suspense>

        {this.props.logger && <Preloader />}
        {this.props.loggerAuthorization && <Preloader />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logger: logger(state),
  loggerAuthorization: loggerAuthorization(state),
});

const mapDispatchToProps = {
  currentUser: currentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
