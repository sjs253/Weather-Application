import React from "react";
import { Line } from "react-chartjs-2";

export default function TemperatureGradient(props: any) {
  let dayName = props.match.params.day;
  dayName = dayName.toLowerCase();
  const state = {
    labels: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    datasets: [
      {
        label: "Temperature",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(69,179,224,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: props.weatherstate[dayName].stats,
      },
    ],
  };

  console.log(props.weatherstate[dayName]);

  return (
    <div style={{ width: 750, marginLeft: "auto", marginRight: "auto" }}>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Temperature across the Day!",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </div>
  );
}
