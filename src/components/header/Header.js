import React from "react";
import styles from "./Header.module.css";
import Button from "../../ui/Button/Button";
import { FaGooglePlay, FaAppStoreIos, FaStar } from "react-icons/fa";
import mockuoImg from ".././../assets/PixelMockup.png";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Reinvent the way you accomplish your goals</h1>
      <p>Small Steps, Big Goals with Stepseed</p>
      <div className={styles.download_buttons}>
        <div className={styles.btn_sec}>
          <Button
            title={"Play Store"}
            icon={<FaGooglePlay />}
            className={"download_btn"}
            url={
              "https://play.google.com/store/apps/details?id=com.subfocal.stepseed&hl=en_US"
            }
          />
          <div className={styles.android_rating}>
            <div className={styles.star_sec}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span>5.0</span>
          </div>
        </div>
        <div className={styles.btn_sec}>
          <Button
            title={"App Store"}
            icon={<FaAppStoreIos />}
            className={"download_btn"}
            url={
              "https://apps.apple.com/in/app/stepseed-ai-goal-tracker/id6467240661"
            }
          />
          <div className={styles.ios_rating}>
            <div className={styles.star_sec}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span>5.0</span>
          </div>
        </div>
      </div>
      <img src={mockuoImg} alt="mocuk img " className={styles.header_img} />
    </header>
  );
}

export default Header;
