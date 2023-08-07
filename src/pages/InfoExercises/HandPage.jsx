import React from "react";
import hands from "../../assets/infoExercise/hand.gif";
import hands2 from "../../assets/infoExercise/hand2.gif";
import timer from "../../assets/categories/timer.png";
import line from "../../assets/infoExercise/line.png";
import Timer from "../../components/timer/Timer";
import Exercise from "../../components/Exercise";

const pageInfo = [
  {
    id: 3,
    image: hands,
    image2: hands2,
    alt: "hands",
    className: "infoExercise_without-flex-direction",
    title: "Разминка для кистей рук",
    inst: "Повышает подвижность суставов",
    inst2: "Восстанавливает кровообращение",
    inst3: "Облегчает болевые ощущения",
    time: "3-5 минут",
  },
];

const articles = [
  {
    id: 1,
    article:
      "Вращайте кистями, чтобы помочь размять лучезапястный сустав и избавиться от ограниченной подвижности и застоя кровообщения.",
    article2:
      "Сцепите руки в замок и на выдохе потянитесь вперед, выворачивая ладони тыльной стороной наружу. На вдохе вернитесь в исходное положение и расцепите руки. Старайтесь наклониться как можно ниже, чтобы почувствовать, как растягиваются мышцы спины и вытягивается позвоночник.",
  },
];

const text = [
  "Повысить подвижность суставов",
  "Восстановить кровообращение",
  "Облегчить болевые ощущения",
];
const HandPage = () => {
  return (
    <>
      <Exercise articles={articles} pageInfo={pageInfo} text={text} />
    </>
  );
};

export default HandPage;
