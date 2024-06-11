"use client";
import React from "react";
import styles from "./Cloud.module.css";

export default function Cloud({ style }) {
  return (
    <div className={styles.smallCloud} style={style}>
      <div className={styles.smallBase}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
      </div>
    </div>
  );
}
