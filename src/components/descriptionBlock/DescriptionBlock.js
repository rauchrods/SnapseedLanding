import React from "react";
import styles from "./DescriptionBlock.module.css";

function DescriptionBlock({ img, description, alignment = "left" }) {
  const leftSec = (
    <div className={styles.img_container} >
      <img src={img} alt="description" />
    </div>
  );

  const rightSec = (
    <div className={styles.content}>
      <p>{description}</p>
    </div>
  );

  return (
    <section className={`${styles.description_block} ${styles[`${alignment}_align`]}`}>
      {alignment === "left" ? (
        <>
          {leftSec}
          {rightSec}
        </>
      ) : (
        <>
          {rightSec}
          {leftSec}
        </>
      )}
    </section>
  );
}

export default DescriptionBlock;
