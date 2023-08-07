import React from "react";
//images
import shoulderNeck from "../../assets/infoExercise/neck.gif";
import shoulderNeck2 from "../../assets/infoExercise/neck2.gif";
import timer from "../../assets/categories/timer.png";
import line from "../../assets/infoExercise/line.png";
import Timer from "../../components/timer/Timer";
import Exercise from "../../components/Exercise";

const pageInfo = [
  {
    id: 1,
    image: shoulderNeck,
    image2: shoulderNeck2,
    alt: "shoulderNeck",
    className: "infoExercise_without-flex-direction",
    title: "Разминка для шеи и плеч",
    inst: "Расслабляет мышцы спины, плеч и шеи",
    inst2: "Снимает нагрузку",
    inst3: "Регулирует кровеносное давление",
    time: "5 минут",
  },
];

const articles = [
  {
    id: 5,
    article:
      "Простое упражнение с выведением головы вперед мягко разминает мышцы шеи, убирает напряжение в шее и верхней части спины, избавляет от двойного подбородка.",
    article2:
      "Продолжаем разминать шею. Делаем повороты шеи полукругом и в пиковой точке поднимаем голову, вытягивая вверх подбородок. Упражнение полезно для разминки шейно-воротниковой зоны, а также для избавления от второго подбородка.",
  },
];
const text = [
  "Расслабить мышцы",
  "Снять нагрузку",
  "Сбалансировать кровеносное давление",
];

const NeckPage = () => {
  return (
    <>
      <Exercise articles={articles} pageInfo={pageInfo} text={text} />
    </>
  );
};

export default NeckPage;
