import { FC } from "react";

import styles from "./Login.module.css";
import CustomInput from "./input/CustomInput";
import ConfirmButton from "./confirmbutton/ConfirmButton";
import RememberMeAndForgotPas from "./rememberme/RememberMeAndForgotPas";

const Login: FC = () => {
  return (
    <div className={styles.login}>
      <h1 className={styles.header}>Login</h1>
      <CustomInput label="Username" type="" />
      <CustomInput label="Password" type="password" />
      <div className={styles.remembermeandforgotpas}>
        <RememberMeAndForgotPas />
      </div>
      <ConfirmButton />
      <div className={styles.donthaveanaccount}>
        <span>Dont have an account?</span>
        <span className={styles.register}>Register</span>
      </div>
    </div>
  );
};

export default Login;
