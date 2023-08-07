import React from "react";
import eyes from "../../assets/infoExercise/eyes.gif";
import eyes2 from "../../assets/infoExercise/eyes2.gif";
import timer from "../../assets/categories/timer.png";
import line from "../../assets/infoExercise/line.png";
import Timer from "../../components/timer/Timer";
import idea from "../../assets/infoExercise/idea.svg";
import halfLine from "../../assets/infoExercise/halfLine.jpg";
import fullLine from "../../assets/infoExercise/fullLine.jpg";
import Exercise from "../../components/Exercise";
const pageInfo = [
  {
    id: 5,
    image: eyes,
    image2: eyes2,
    alt: "eyes",
    className: "infoExercise_without-flex-direction",
    title: "Разминка для глаз",
    inst: "Снимает усталость",
    inst2: "Восстанавливает кровообращение в глазах",
    inst3: "Укрепляет глазные мышцы",
    time: "3-5 минут",
  },
];

const articles = [
  {
    id: 5,
    article:
      'На вдохе медленно поверните глаза вправо ("до упора", но без сильного напряжения). Не задерживаясь, на выдохе, верните глаза в исходное положение. Таким же образом поверните глаза влево.\n' +
      "Для начала выполняйте один цикл, затем два (через две-три недели), и, в конце концов, выполняйте три цикла. После выполнения упражнения закройте глаза на несколько секунд. Повторите упражнение 10 раз.",
    article2:
      "Глубоко и медленно вдыхая (желательно, животом), посмотрите в межбровье, задержите глаза в этом положении на несколько секунд. Медленно выдыхая, верните глаза в исходное положение и закройте на несколько секунд. Со временем, постепенно (не раньше, чем через 2–3 недели), задержку в верхнем положении можно увеличить (через полгода до нескольких минут). Повторите упражнение 10 раз.\n",
  },
];

const text = [
  "Снимите усталость",
  "Восстановите кровообращение в глазах",
  "Укрепите глазные мышцы",
];

const EyePage = () => {
  return (
    <>
      <Exercise articles={articles} pageInfo={pageInfo} text={text} />
    </>
  );
};

export default EyePage;
