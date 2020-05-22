import React from "react";
import { weatherInterface } from "../interface/weatherInterface";

export default function weatherData() {
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

  let weatherstate: any = {
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

  function mapNumToDay(num: any): any {
    switch (num) {
      case 0:
        return "monday";
      case 1:
        return "tuesday";
      case 2:
        return "wednesday";
      case 3:
        return "thursday";
      case 4:
        return "friday";
      default:
        return "lol";
    }
  }

  let url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=6c789ffd1363d4124e9a5e614207507c";

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      const dailydata = (({ daily }) => ({ daily }))(data);
      weatherstate.monday.maxTemp = dailydata.daily[0].temp.max;
      weatherstate.monday.minTemp = dailydata.daily[0].temp.min;
      weatherstate.monday.main = dailydata.daily[0].weather[0].main;

      weatherstate.tuesday.maxTemp = dailydata.daily[1].temp.max;
      weatherstate.tuesday.minTemp = dailydata.daily[1].temp.min;
      weatherstate.tuesday.main = dailydata.daily[1].weather[0].main;

      weatherstate.wednesday.maxTemp = dailydata.daily[2].temp.max;
      weatherstate.wednesday.minTemp = dailydata.daily[2].temp.min;
      weatherstate.wednesday.main = dailydata.daily[2].weather[0].main;

      weatherstate.thursday.maxTemp = dailydata.daily[3].temp.max;
      weatherstate.thursday.minTemp = dailydata.daily[3].temp.min;
      weatherstate.thursday.main = dailydata.daily[3].weather[0].main;

      weatherstate.friday.maxTemp = dailydata.daily[4].temp.max;
      weatherstate.friday.minTemp = dailydata.daily[4].temp.min;
      weatherstate.friday.main = dailydata.daily[4].weather[0].main;

      console.log(weatherstate);
    })
    .catch(() => console.log("Error"));

  return weatherstate;
}
