import React from "react";
import { weatherInterface } from "../interface/weatherInterface";

const hourlydata = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];
const weatherstate: weatherInterface = {
  monday: {
    day: "Monday",
    maxTemp: 40,
    minTemp: 30,
    main: "sunny",
    stats: hourlydata,
  },
  tuesday: {
    day: "Tuesday",
    maxTemp: 35,
    minTemp: 28,
    main: "cloudy",
    stats: hourlydata,
  },
  wednesday: {
    day: "Wednesday",
    maxTemp: 30,
    minTemp: 22,
    main: "rainy",
    stats: hourlydata,
  },
  thursday: {
    day: "Thursday",
    maxTemp: 20,
    minTemp: 12,
    main: "thunderstorm",
    stats: hourlydata,
  },
  friday: {
    day: "Friday",
    maxTemp: 32,
    minTemp: 28,
    main: "cloudy",
    stats: hourlydata,
  },
};

export default weatherstate;
