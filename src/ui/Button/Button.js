import React from "react";
import styles from "./Button.module.css";

function Button({ title, icon, className, url }) {
  function redirectHandler() {
    if (url) {
      window.open(url, '_blank');
    } else {
      return;
    }
  }

  return (
    <button
      className={`${styles.snapseed_button} ${className && styles[className]}`}
      onClick={redirectHandler}
    >
      <span>{title}</span>
      {icon && icon}
    </button>
  );
}

export default Button;
