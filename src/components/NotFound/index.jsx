import React from "react";
import styles from "./NotFound.module.scss";
const NotFoundBlock = () => {
  console.log(styles);
  console.log("hello");
  return (
    <>
      <div className={styles.root}>
        <div className={styles.text}>
          <h1>Нічого не знайдено 👀</h1>
          <p>Мабуть, сталася помилка...</p>
        </div>
      </div>
    </>
  );
};
export default NotFoundBlock;
