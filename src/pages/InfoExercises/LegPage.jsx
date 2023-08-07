import React from "react";
//images
import legFoot from "../../assets/infoExercise/leg.gif";
import legFoot2 from "../../assets/infoExercise/leg2.gif";
import timer from "../../assets/categories/timer.png";
import line from "../../assets/infoExercise/line.png";
import Timer from "../../components/timer/Timer";
import Exercise from "../../components/Exercise";

const pageInfo = [
  {
    id: 4,
    image: legFoot,
    image2: legFoot2,
    alt: "legFoot",
    className: "infoExercise_without-flex-direction",
    title: "Разминка для ног и ступней",
    inst: "Улучшает метаболизм",
    inst2: "Обеспечивает приток кислорода",
    inst3: "Улучшает кровообращение",
    time: "5-8 минут",
  },
];

const articles = [
  {
    id: 4,
    article:
      "Положите ладони на колени, стопы поставьте на пол. Поставьте правую ногу на носок, оставляя левую стоять на полу. Затем правую опустите, а левую поставьте на носок, максимально вытягивая стопу, чтобы растянуть мышцы. Выполняйте шаги ритмично, не задерживая дыхания. Упражнение отлично разминает голеностоп, снимает усталость с ног, а также улучшает крово- и лимфоток, предотвращая варикоз.",
    article2:
      "Поставьте ноги под прямым углом, руки положите на сидение стула. На выдохе поднимите правое колено вверх, на вдохе – опустите. На следующем выдохе поменяйте ногу. Поднимайте ногу как можно выше, чтобы стимулировать отток крови. Выполняйте это упражнение в офисе, чтобы предотвратить боль в коленях от долгого сидения, улучшить кровообращение и предотвратить отечность к концу дня.",
  },
];

const text = [
  "Улучшить метаболизм",
  "Восстановить приток кислорода",
  "Улучшить кровообращение",
];
const LegPage = () => {
  return (
    <>
      <Exercise pageInfo={pageInfo} articles={articles} text={text} />
    </>
  );
};

export default LegPage;
