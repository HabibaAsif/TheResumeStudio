import React from "react";

import styles from "./InputControl.css";

function InputControl({ label, ...props }) {
  return (
    <div className={styles.main}>
      <div className={styles.container3}>
        <div className={styles.box}>
          {label && <label>{label}</label>}
          
        </div>
        <input type="text" {...props} />
      </div>
    </div>
  );
}

export default InputControl;
