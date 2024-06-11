import React from "react";
import styles from "./Button.module.css";

export default function Button({ onClick, text, secondary, disabled, style}) {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{
        background: secondary ? "transparent" : "",
        color: secondary ? "#F79310" : "",
        border: secondary ? "1px solid #F79310" : "",
        ...style
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
