import Layout from "../components/Layout";
import Timer from "../components/timer/Timer";
import {
  LandingPage,
  PageBuy,
  PageNutritio,
  PageProLanding,
  PageProfile,
  PageProfileNotifications,
  PageProfileStatistics,
} from "../pages";
import { CategoryPage } from "../pages/Category/CategoryPage";
import ExerPage from "../pages/ExerPage/ExerPage";
import BackPage from "../pages/InfoExercises/BackPage";
import EyePage from "../pages/InfoExercises/EyePage";
import HandPage from "../pages/InfoExercises/HandPage";
import { InfoExercises } from "../pages/InfoExercises/InfoExercises";
import LegPage from "../pages/InfoExercises/LegPage";
import NeckPage from "../pages/InfoExercises/NeckPage";
import LoginPage from "../pages/LoginPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import RegisterPage from "../pages/RegisterPage";

import { links } from "./links";

export const authRoutes = [];

export const outRoutes = [
  {
    path: "/register",
    element: <RegisterPage />,
    isAuthRoute: true,
  },
  {
    path: "/login",
    element: <LoginPage />,
    isAuthRoute: true,
  },
];

const test = {
  name: "Глаз",
  cons: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius est ducimus praesentium quibusdam unde doloribus excepturi illum facilis eligendi, fuga harum perferendis ratione aliquid ab qui nemo ipsum similique ",
};
export const publicRoutes = [
  {
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: `/categories/`,
        element: <CategoryPage />,
      },
      {
        path: `/categories/eye`,
        element: <EyePage />,
      },
      {
        path: `/categories/legs`,
        element: <LegPage />,
      },
      {
        path: `/categories/neck`,
        element: <NeckPage />,
      },
      {
        path: `/categories/hand`,
        element: <HandPage />,
      },
      {
        path: `/categories/back`,
        element: <BackPage />,
      },
      {
        path: "/InfoExercises",
        element: <InfoExercises />,
      },
      {
        path: `/timer`,
        element: <Timer />,
      },
      {
        path: `/ex`,
        element: <ExerPage test={test} />,
      },
      {
        path: `/buyPro`,
        element: <PageBuy />,
      },
      {
        path: `/profile`,
        element: <PageProfile />,
      },
      {
        path: `/notifications`,
        element: <PageProfileNotifications />,
      },
      {
        path: `/statistics`,
        element: <PageProfileStatistics />,
      },
      {
        path: "/pro",
        element: <PageProLanding />,
      },
      {
        path: `/nutritio/:id`,
        element: <PageNutritio />,
      },
    ],
  },
];
