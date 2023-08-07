import Man from "../../assets/categories/man.png";
import Back from "../../assets/categories/back.png";
import Hand from "../../assets/categories/hand.png";
import Leg from "../../assets/categories/leg.png";
import Eye from "../../assets/categories/eye.png";

export const warmUps = [
  {
    id: 1,
    image: Man,
    alt: "Man",
    className: "categories__without_flex_direction",
    name: "Разминка для шеи и плеч",
    time: "5 минут",
    pros: "Расслабляет мышцы спины, плеч и шеи",
    pros2: "Снимает нагрузку",
    pros3: "Регулирует кровеносное давление",
    routeName: "/neck",
  },
  {
    id: 2,
    image: Back,
    alt: "Back",
    className: "categories__with_flex_direction",
    name: "Разминка для спины",
    time: "3-5 минут",
    pros: "Обеспечивает правильную циркуляцию крови",
    pros2: "Профилактика искривления позвоночника",
    pros3: "Повышает тонус мышц",
    routeName: "/back",
  },
  {
    id: 3,
    image: Hand,
    alt: "Hand",
    className: "categories__without_flex_direction",
    name: "Разминка для кистей рук",
    time: "3-5 минут",
    pros: "Повышает подвижность суставов",
    pros2: "Восстанавливает кровообращение",
    pros3: "Облегчает болевые ощущения",
    routeName: "/hand",
  },
  {
    id: 4,
    image: Leg,
    alt: "Leg",
    className: "categories__with_flex_direction",
    name: "Разминка для ног и ступней",
    time: "5-8 минут",
    pros: "Улучшает метаболизм",
    pros2: "Обеспечивает приток кислорода",
    pros3: "Улучшает кровообращение",
    routeName: "/legs",
  },
  {
    id: 5,
    image: Eye,
    alt: "Eye",
    className: "categories__without_flex_direction",
    name: "Разминка для глаз",
    time: "3-5 минут",
    pros: "Снимает усталость",
    pros2: "Восстанавливает кровообращение в глазах",
    pros3: "Укрепляет глазные мышцы",
    routeName: "/eye",
  },
];
