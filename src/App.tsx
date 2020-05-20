import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardListContainer from "./components/WeatherCard/CardListContainer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DayComponent from "./components/DayComponent/DayComponent";
import weatherstate from "./JsonData/Data";

function App() {
  return (
    <div style={{ margin: 16 }}>
      <HeaderComponent />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <CardListContainer {...weatherstate} />}
        />
        <Route
          path="/:day"
          render={(state) => (
            <DayComponent {...state} weatherstate={weatherstate} />
          )}
        />
      </Switch>
    </div>
  );
}

function HeaderComponent() {
  return <h1 style={{ textAlign: "center" }}>Weather Application</h1>;
}

export default App;
