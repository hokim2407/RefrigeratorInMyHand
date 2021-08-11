import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import MainPage from "./mainPage";
import SaveEnv from "./saveEnv";
import CheckMine from "./checkMine";

function App() {
  return (
    <div className="App">
      <Link to="/" />
      <Link to="/saveEnv" />
      <Link to="/checkMine" />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/saveEnv" component={SaveEnv} />
        <Route path="/checkMine" component={CheckMine} />
      </Switch>
    </div>
  );
}

export default App;
