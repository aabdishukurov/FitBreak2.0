import React from "react";
// images
// images
import { warmUps } from "./warmUp";
import Timer from "../../assets/categories/timer.png";
import { Category } from "../../components/categories/Category";
import styles from "./CategoryPage.module.scss";
export const CategoryPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Упражнения и разминки</h2>
        {warmUps.map((warmup) => (
          <Category
            key={warmup.id}
            className={warmup.className}
            categoryImage={warmup.image}
            timerImage={Timer}
            alt={warmup.alt}
            name={warmup.name}
            pros={warmup.pros}
            pros2={warmup.pros2}
            pros3={warmup.pros3}
            time={warmup.time}
            routeName={warmup.routeName}
          />
        ))}
      </div>
    </>
  );
};
