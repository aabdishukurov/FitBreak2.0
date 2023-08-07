import React from "react";
import styles from "./PageNotFound.module.scss";
const PageNotFound = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>404 - Page not found</h1>
        <p>Sorry, the requested page does not exist.</p>
      </div>
    </>
  );
};

export default PageNotFound;
