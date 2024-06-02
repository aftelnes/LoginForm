import { Checkbox } from "@mui/material";
import { FC } from "react";

import styles from "./RememberMeAndForgotPas.module.css";

const RememberMeAndForgotPas: FC = () => {
  return (
    <div className={styles.rememberandforgot}>
      <div>
        <Checkbox
          style={{
            color: "rgb(61, 161, 243)",
          }}
        />
        <span className={styles.rememberme}>Remember me</span>
      </div>

      <span className={styles.forgotpassword}>Forgot Password?</span>
    </div>
  );
};

export default RememberMeAndForgotPas;
