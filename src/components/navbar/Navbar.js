import React from "react";
import styles from "./Navbar.module.css";
import { FaArrowDown } from "react-icons/fa";
import Button from "../../ui/Button/Button";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <h2>Stepseed</h2>
        <p>Achieve your dreams one step at a time </p>
      </div>

      <Button title={"Get Started"} icon={<FaArrowDown />} url={'https://apps.apple.com/in/app/stepseed-ai-goal-tracker/id6467240661'} />
    </nav>
  );
}

export default Navbar;
