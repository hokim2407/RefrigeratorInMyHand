import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./mainPage";
import SaveEnv from "./saveEnv";
import Choice from "./choice";
import CheckMine from "./checkMine";
import FillPage from "./fillPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={MainPage} exact />
      <Route path="/saveEnv" component={SaveEnv} />
      <Route path="/choice" component={Choice} />
      <Route path="/checkMine" component={CheckMine} />
      <Route path="/fill" component={FillPage} />
    </div>
  );
}

export default App;
