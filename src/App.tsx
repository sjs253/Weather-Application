import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardListContainer from "./components/WeatherCard/CardListContainer";

export interface weatherInterface {
  monday: {
    maxTemp: number;
    minTemp: number;
    main: string;
  };
  tuesday: {
    maxTemp: number;
    minTemp: number;
    main: string;
  };
  wednesday: {
    maxTemp: number;
    minTemp: number;
    main: string;
  };
  thursday: {
    maxTemp: number;
    minTemp: number;
    main: string;
  };
  friday: {
    maxTemp: number;
    minTemp: number;
    main: string;
  };
}

function App() {
  const state: weatherInterface = {
    monday: {
      maxTemp: 40,
      minTemp: 30,
      main: "sunny",
    },
    tuesday: {
      maxTemp: 35,
      minTemp: 28,
      main: "cloudy",
    },
    wednesday: {
      maxTemp: 30,
      minTemp: 22,
      main: "rainy",
    },
    thursday: {
      maxTemp: 20,
      minTemp: 12,
      main: "thunderstorm",
    },
    friday: {
      maxTemp: 32,
      minTemp: 28,
      main: "cloudy",
    },
  };

  return (
    <div style={{ margin: 16 }}>
      <h1>Weather Application</h1>
      <Fragment>
        <CardListContainer {...state} />
      </Fragment>
    </div>
  );
}

export default App;
