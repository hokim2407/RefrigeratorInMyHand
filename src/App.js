import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import MainPage from "./mainPage";
import SaveEnv from "./saveEnv";

function App() {
  return (
    <div className="App">
      <Link to="/" component={MainPage} exact />
      <Link to="/saveEnv" component={SaveEnv} />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/saveEnv" component={SaveEnv} />
      </Switch>
    </div>
  );
}

export default App;
