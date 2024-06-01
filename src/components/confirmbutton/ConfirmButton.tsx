import { FC } from "react";
import { Button } from "@mui/material";

import styles from "./ConfirmButton.module.css";

const ConfirmButton: FC = () => {
  return (
    <div className={styles.confirmbutton}>
      <Button
        variant="contained"
        className={styles.button}
        style={{
          color: "black",
          backgroundColor: "rgb(61, 161, 243)",
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default ConfirmButton;
