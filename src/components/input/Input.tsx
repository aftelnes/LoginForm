import { TextField } from "@mui/material";

import styles from "./Input.module.css";
import { FC } from "react";

type Props = {
  label: string;
};

const Input: FC<Props> = ({ label }) => {
  return (
    <div className={styles.input}>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        className={styles.textfield}
      />
    </div>
  );
};

export default Input;
