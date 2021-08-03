import { Component } from "react";
import { connect } from "react-redux";

import { registrationUser } from "../../redux/authorization/autorization-operations";
import styles from "../stylesForm/form.module.scss";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  registerUser = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  registerUserSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <form className={styles.transparent} onSubmit={this.registerUserSubmit}>
        <div className={styles.formInner}>
          <h2 className={styles.title}>Phonebook</h2>
          <label>
            Name
            <input
              onChange={this.registerUser}
              type="text"
              value={this.state.name}
              name="name"
              //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Enter your name"
              required
            />
          </label>
          <label>
            email
            <input
              onChange={this.registerUser}
              type="email"
              value={this.state.email}
              name="email"
              title="Enter your email"
              required
            />
          </label>
          <label>
            password
            <input
              onChange={this.registerUser}
              type="password"
              value={this.state.password}
              name="password"
              title="Enter your password"
              required
            />
          </label>
          <button className={styles.button} type="submit">
            register
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: registrationUser,
};

export default connect(null, mapDispatchToProps)(Register);
