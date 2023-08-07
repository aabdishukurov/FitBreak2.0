import React from "react";
import YogaImage from "../../assets/landing/landing_about.png";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <h2 className={styles.about__title}>О FitBreak</h2>
      </div>

      <div className={styles.about__wrapper}>
        <div className={styles.about__yoga}>
          <img src={YogaImage} alt="yoga" />
        </div>
        <div className={styles.about__text}>
          <p>
            <b>FitBreak</b>- приложение и онлайн трекер с персонализацией,
            которые помогут Вам быстро и легко избавится от проблем в условиях
            офиса. Исходя из ваших целей, Вам будет предложен личный порядок
            разминок и упражнений, которые увеличат Вашу продуктивность и
            бодрость в течение всего рабочего времени.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
