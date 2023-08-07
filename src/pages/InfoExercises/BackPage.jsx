import React from "react";
//images
import back from "../../assets/infoExercise/back.gif";
import back2 from "../../assets/infoExercise/back2.gif";
import timer from "../../assets/categories/timer.png";
import line from "../../assets/infoExercise/line.png";
import Timer from "../../components/timer/Timer";
import Exercise from "../../components/Exercise";

const pageInfo = [
  {
    id: 2,
    image: back,
    image2: back2,
    alt: "back",
    className: "infoExercise_without-flex-direction",
    title: "Разминка для спины",
    inst: "Обеспечивает правильную циркуляцию крови",
    inst2: "Профилактика искривления позвоночника",
    inst3: "Повышает тонус мыш",
    time: "3-5 минут",
  },
];

const articles = [
  {
    id: 2,
    article:
      "Сидя за столом, расположить ладони под подбородком. Считая от 1 до 10, давим на ладони подбородком как можно сильнее. Повторить с перерывом 3 раза.",
    article2:
      "Стоя прямо или сидя. Голову склоняем на левое плечо, упираясь основанием ладони правой руки чуть выше уха. С силой давим на голову ладонью и, преодолевая сопротивление, возвращаем ее в исходное положение. Затем делаем то же самое, наклоняя голову вправо. 3 раза по 5 секунд в каждую сторону.",
  },
];

const text = ["Разогнать кровь", "Профилактика искривления", "Тонус мышц"];
const BackPage = () => {
  return (
    <>
      <Exercise pageInfo={pageInfo} articles={articles} text={text} />
    </>
  );
};

export default BackPage;
