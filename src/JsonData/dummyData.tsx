import React from "react";

const hourlydata = [
  35,
  36,
  36,
  38,
  40,
  35,
  35,
  37,
  40,
  36,
  37,
  39,
  38,
  37,
  38,
  35,
  40,
  36,
  38,
  40,
  37,
  36,
  39,
  35,
];
let dummyData: any = {
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

export default dummyData;
