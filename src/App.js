import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import AppRouter from "./links/AppRouter";
import { InfoExercises } from "./pages/InfoExercises/InfoExercises";
import { PageProLanding } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}
export default App;
