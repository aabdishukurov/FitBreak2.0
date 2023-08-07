import React from "react";
import styles from "./LineExercise.module.scss";
import halfLine from "../../assets/infoExercise/halfLine.jpg";
const LineExercise = () => {
  return (
    <div className={styles.line}>
      <img src={halfLine} alt="" />
    </div>
  );
};

export default LineExercise;
