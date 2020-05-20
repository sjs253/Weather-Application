import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardListContainer from "./components/WeatherCard/CardListContainer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DayComponent from "./components/DayComponent/DayComponent";

export interface weatherInterface {
  monday: {
    day: string;
    maxTemp: number;
    minTemp: number;
    main: string;
  };
  tuesday: {
    day: string;
    maxTemp: number;
    minTemp: number;
    main: string;
  };
  wednesday: {
    day: string;
    maxTemp: number;
    minTemp: number;
    main: string;
  };
  thursday: {
    day: string;
    maxTemp: number;
    minTemp: number;
    main: string;
  };
  friday: {
    day: string;
    maxTemp: number;
    minTemp: number;
    main: string;
  };
}

function App() {
  const state: weatherInterface = {
    monday: {
      day: "Monday",
      maxTemp: 40,
      minTemp: 30,
      main: "sunny",
    },
    tuesday: {
      day: "Tuesday",
      maxTemp: 35,
      minTemp: 28,
      main: "cloudy",
    },
    wednesday: {
      day: "Wednesday",
      maxTemp: 30,
      minTemp: 22,
      main: "rainy",
    },
    thursday: {
      day: "Thursday",
      maxTemp: 20,
      minTemp: 12,
      main: "thunderstorm",
    },
    friday: {
      day: "Friday",
      maxTemp: 32,
      minTemp: 28,
      main: "cloudy",
    },
  };

  return (
    <div style={{ margin: 16 }}>
      <HeaderComponent />
      <Switch>
        <Route path="/" exact render={() => <CardListContainer {...state} />} />
        <Route path="/:day" component={DayComponent} />
      </Switch>
    </div>
  );
}

function HeaderComponent() {
  return <h1>Weather Application</h1>;
}

export default App;
