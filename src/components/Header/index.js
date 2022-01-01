import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/">首页</NavLink>
      <NavLink to="/about">关于</NavLink>
    </div>
  );
};

export default Header;
