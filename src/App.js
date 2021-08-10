import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./mainPage";
import SaveEnv from "./saveEnv";

function App() {
  return (
    <div className="App">
      <Route path="/" component={MainPage} exact />
      <Route path="/saveEnv" component={SaveEnv} />
    </div>
  );
}

export default App;
