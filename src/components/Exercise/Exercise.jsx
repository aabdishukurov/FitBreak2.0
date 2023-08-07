import React from "react";
import styles from "./Exercise.module.scss";
import eyes from "../../assets/infoExercise/eyes.gif";
import eyes2 from "../../assets/infoExercise/eyes2.gif";
import timer from "../../assets/categories/timer.png";
import line from "../../assets/infoExercise/line.png";
import Timer from "../../components/timer/Timer";
import idea from "../../assets/infoExercise/idea.svg";
import halfLine from "../../assets/infoExercise/halfLine.jpg";
import fullLine from "../../assets/infoExercise/fullLine.jpg";

const Exercise = ({ articles, pageInfo, text }) => {
  console.log(articles);
  return (
    <>
      <div className="container">
        <div className="infoExercise">
          <h2 className="infoExercise_title">Упражнения и разминки</h2>
          <div className="infoExercise_imgs">
            <img src={halfLine} alt="line" />
            <div>
              {text.map((item, index) => {
                if (index === 0) {
                  return <b>{item}</b>;
                }
                return <p>{item}</p>;
              })}
            </div>
          </div>
          {pageInfo.map((item) => (
            <div className={item.className} key={item.id}>
              <div className="infoExercise_image">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="infoExercise">
                <div className="infoExercise_text">
                  <div className="text_name">
                    <h3>{item.title}</h3>
                    <img src={timer} alt="timer" />
                    <p>{item.time}</p>
                  </div>
                  <Timer />
                </div>
              </div>
            </div>
          ))}
          <div className="infoExercise_article">
            {articles.map((title) => (
              <p>{title.article}</p>
            ))}
          </div>
          <div className="infoExercise_inner">
            <img src={idea} alt="" />
            <p>
              Для начала выполняйте один цикл, затем два (через две-три недели),
              и, в конце концов, выполняйте три цикла. После выполнения
              упражнения закройте глазана несколько секунд. Повторите упражнение
              10 раз.
            </p>
          </div>
        </div>

        <div className="infoExercise">
          <div className="infoExercise_imgs">
            <img src={fullLine} alt="line" />

            <div>
              {text.map((item) => {
                return <b>{item}</b>;
              })}
            </div>
          </div>
          {pageInfo.map((item) => (
            <div className={item.className} key={item.id}>
              <div className="infoExercise_image">
                <img src={item.image2} alt={item.alt} />
              </div>
              <div className="infoExercise_text">
                <div className="text_name">
                  <h3>{item.title}</h3>
                  <img src={timer} alt="timer" />
                  <p>{item.time}</p>
                </div>
                <Timer />
              </div>
            </div>
          ))}
          <div className="infoExercise_article">
            {articles.map((title) => (
              <p>{title.article2}</p>
            ))}
          </div>
          <div className="infoExercise_inner">
            <img src={idea} alt="" />
            <p>
              Для начала выполняйте один цикл, затем два (через две-три недели),
              и, в конце концов, выполняйте три цикла. После выполнения
              упражнения закройте глазана несколько секунд. Повторите упражнение
              10 раз.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exercise;
