import React from "react";
import styles from "./categories.module.scss";
import { Button } from "./button/Button";
import { Link } from "react-router-dom";
import Line from "../../assets/categories/small-blue-line.png";
export const Category = ({
  className,
  categoryImage,
  alt,
  name,
  timerImage,
  time,
  pros,
  pros2,
  pros3,
  routeName,
}) => {
  const computedClassName = styles[className] || className;

  return (
    <div className={styles.categories}>
      <div className={computedClassName}>
        <div className={styles.categories__image_side}>
          <img src={categoryImage} alt={alt} />
          <img className={styles.categories__img} src={Line} alt="line" />
        </div>
        <div className={styles.categories__text_side}>
          <div className={styles.text_side__name}>
            <h3>{name}</h3>
            <img src={timerImage} alt="timer" />
            <p>{time}</p>
          </div>
          <div className={styles.categories__pros_side}>
            <div>
              <div>
                <span></span>
              </div>
              <p>{pros}</p>
            </div>
            <div>
              <div>
                <span></span>
              </div>
              <p>{pros2}</p>
            </div>
            <div>
              <div></div>
              <p>{pros3}</p>
            </div>
          </div>
          <Link to={`/categories${routeName}`}>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
};
