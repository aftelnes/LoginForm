import { FC } from "react";

import styles from "./Login.module.css";
import Input from "./input/Input";
import ConfirmButton from "./confirmbutton/ConfirmButton";

const Login: FC = () => {
  return (
    <div className={styles.login}>
      <h1 className={styles.header}>Login</h1>
      <Input label="Username" />
      <Input label="Password" />
      <ConfirmButton />
    </div>
  );
};

export default Login;
