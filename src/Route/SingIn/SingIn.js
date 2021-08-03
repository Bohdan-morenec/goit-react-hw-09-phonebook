import { Component } from "react";
import { connect } from "react-redux";

import { login } from "../../redux/authorization/autorization-operations";
import styles from "../stylesForm/form.module.scss";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  authorization = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  submitAuthorization = (e) => {
    e.preventDefault();

    this.props.sendInformation(this.state);

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.transparent} onSubmit={this.submitAuthorization}>
        <div className={styles.formInner}>
          <h2 className={styles.title}>Phonebook</h2>
          <label>
            Email
            <input
              className={styles}
              onChange={this.authorization}
              type="email"
              value={email}
              name="email"
              title="Enter your email"
              required
            />
          </label>
          <label>
            Password
            <input
              onChange={this.authorization}
              type="password"
              value={password}
              name="password"
              title="Enter your password"
              required
            />
          </label>
          <button className={styles.button} type="submit">
            Authorization
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  sendInformation: login,
};

export default connect(null, mapDispatchToProps)(Login);
