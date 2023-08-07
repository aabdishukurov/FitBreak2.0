import React from "react";
import { Button } from "../categories/button/Button";
import Eye from "../../assets/categories/eye.png";
import Leg from "../../assets/categories/leg.png";
import Timer from "../../assets/categories/timer.png";
import { Link } from "react-router-dom";
import circles from "../../assets/categories/circles.png";
import play from "../../assets/categories/play.svg";
const warmUps = [
  {
    image: Leg,
    alt: "Leg",
    className: "categories__with-flex-direction",
    name: "Разминка для ног и ступней",
    time: "5-8 минут",
    pros: "Улучшает метаболизм",
    pros2: "Обеспечивает приток кислорода",
    pros3: "Улучшает кровообращение",
  },
  {
    image: Eye,
    alt: "Eye",
    className: "categories__without-flex-direction",
    name: "Разминка для глаз",
    time: "3-5 минут",
    pros: "Снимает усталость",
    pros2: "Восстанавливает кровообращение в глазах",
    pros3: "Укрепляет глазные мышцы",
  },
];

export const CategoriesDemo = () => {
  return (
    <div className="categoriesdemo">
      <div className="container">
        <h2 className="categoriesdemo__title">Упражнения и разминки</h2>
        <div className="categoriesdemo__block1">
          <img src={Eye} alt="" />

          <div className="categoriesdemo__wrapper">
            <div className="categoriesdemo__inner">
              <h2>Разминка для глаз</h2>
              <img src={Timer} alt="timer" />
              <span>3-5 минут</span>
            </div>
            <p className="categoriesdemo__text">
              <img src={circles} alt="" />
              <span>Снимает усталость</span>
              <span>Восстанавливает кровообращение в глазах</span>
              <span>Укрепляет глазные мышцы</span>
            </p>
            <Link className="categoriesdemo__link" to={"/ex"}>
              <img src={play} alt="play" />
              Начать разминку
            </Link>
          </div>
        </div>

        <div className="categoriesdemo__block2">
          <div className="categoriesdemo__wrapper">
            <div className="categoriesdemo__inner">
              <h2>Разминка для ног и ступней</h2>
              <img src={Timer} alt="timer" />
              <span>3-5 минут</span>
            </div>
            <p className="categoriesdemo__text">
              <img src={circles} alt="" />
              <span>Обеспечивает приток кислорода</span>
              <span>Улучшает метаболизм</span>
              <span>Улучшает кровообращение</span>
            </p>

            <Link className="categoriesdemo__link" to={"/ex"}>
              <img src={play} alt="play" />
              Начать разминку
            </Link>
          </div>
          <img src={Leg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CategoriesDemo;
