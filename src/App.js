import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import MainPage from "./mainPage";
import SaveEnv from "./saveEnv";
import CheckMine from "./checkMine";
import ScanPage from "./scanPage";

function App() {
  return (
    <div className="App">
      <Link to="/" />
      <Link to="/saveEnv" />
      <Link to="/checkMine" />
      <Link to="/scan" />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/saveEnv" component={SaveEnv} />
        <Route path="/checkMine" component={CheckMine} />
        <Route path="/scan" component={ScanPage} />
      </Switch>
    </div>
  );
}

export default App;
