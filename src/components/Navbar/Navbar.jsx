import React from 'react';
import styles from "./Navbar.module.css";
import hello from "../../assets/hello.jpg";

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
          <div className={styles.greet}>
          <h3>Hey Sharukh</h3>
          <img src={hello} alt="" />
          </div>
          <input placeholder='Search' />
        </div>
      )
}

export default Navbar