import { Input } from "@mui/material";

import styles from "./CustomInput.module.css";
import { FC } from "react";

type Props = {
  label: string;
  type: string;
};

const CustomInput: FC<Props> = ({ label, type }) => {
  return (
    <div className={styles.input}>
      <Input type={type} placeholder={label} className={styles.inputarea} />
    </div>
  );
};

export default CustomInput;
