import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardListContainer from "./components/WeatherCard/CardListContainer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DayComponent from "./components/DayComponent/DayComponent";
import weatherData from "./JsonData/Data";
import NavbarComponent from "./components/Navigation/NavbarComponent";
import { useState } from "react";
import dummyData from "./JsonData/dummyData";
import DatePickerContainer from "./components/DatePicker/DatePickerContainer";

function App() {
  const [weatherstate, setweatherstate] = useState(dummyData);

  const clickHandler = () => {
    setweatherstate(weatherData());
  };
  console.log(weatherstate);
  return (
    <div style={{ margin: 16 }}>
      <HeaderComponent />
      <DatePickerContainer />
      <div style={{ display: "flex", marginTop: 100 }}>
        <NavbarComponent />

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
    </div>
  );
}

function HeaderComponent() {
  return <h1 style={{ textAlign: "center" }}>Weather Application</h1>;
}

export default App;
