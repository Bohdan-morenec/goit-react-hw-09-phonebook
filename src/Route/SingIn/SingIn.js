import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authorization/autorization-operations";

import styles from "../stylesForm/form.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendInformation = (value) => dispatch(login(value));

  const authorization = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        console.log("error");
        break;
    }
  };

  const submitAuthorization = (e) => {
    e.preventDefault();

    sendInformation({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <form className={styles.transparent} onSubmit={submitAuthorization}>
      <div className={styles.formInner}>
        <h2 className={styles.title}>Phonebook</h2>
        <label>
          Email
          <input
            className={styles}
            onChange={authorization}
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
            onChange={authorization}
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
};

export default Login;
