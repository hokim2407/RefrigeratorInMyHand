import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./mainPage";
import SaveEnv from "./saveEnv";
import CheckMine from "./checkMine";
import FillPage from "./fillPage";
import Result from "./result";

function App() {
  return (
    <div className="App">
      <Route path="/" component={MainPage} exact />
      <Route path="/saveEnv" component={SaveEnv} />
      <Route path="/checkMine" component={CheckMine} />
      <Route path="/fill" component={FillPage} />
      <Route path="/result" component={Result} />
    </div>
  );
}

export default App;
