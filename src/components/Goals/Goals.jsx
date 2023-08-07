import React from "react";
import { goals } from "./dataGoal";
import styles from "./Goals.module.scss";

const Goals = () => {
  return (
    <div className="container">
      <div className="goals">
        <div className="goals__choose">
          <h2>Выберите Цель</h2>
        </div>
        <ul className={styles.list}>
          {goals.map((item, index) => (
            <div className={styles.item} key={index}>
              <img src={item.img} alt={item.alt} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Goals;
