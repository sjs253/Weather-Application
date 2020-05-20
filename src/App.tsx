import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardListContainer from "./components/WeatherCard/CardListContainer";

function App() {
  return (
    <div style={{ margin: 16 }}>
      <h1>Weather Application</h1>
      <Fragment>
        <CardListContainer />
      </Fragment>
    </div>
  );
}

export default App;
