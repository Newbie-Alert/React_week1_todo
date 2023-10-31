import React from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav_container}>
      <h4 className={styles.nav_task}>Todo List</h4>
      <h4 className={styles.nav_subject}>React</h4>
    </div>
  );
}
