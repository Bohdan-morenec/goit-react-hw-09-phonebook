import { useState } from "react";
import { useDispatch } from "react-redux";

import { registrationUser } from "../../redux/authorization/autorization-operations";
import styles from "../stylesForm/form.module.scss";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (value) => dispatch(registrationUser(value));

  const registerUser = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const registerUserSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className={styles.transparent} onSubmit={registerUserSubmit}>
      <div className={styles.formInner}>
        <h2 className={styles.title}>Phonebook</h2>
        <label>
          Name
          <input
            onChange={registerUser}
            type="text"
            value={name}
            name="name"
            title="Enter your name"
            required
          />
        </label>
        <label>
          email
          <input
            onChange={registerUser}
            type="email"
            value={email}
            name="email"
            title="Enter your email"
            required
          />
        </label>
        <label>
          password
          <input
            onChange={registerUser}
            type="password"
            value={password}
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
};

export default Register;
