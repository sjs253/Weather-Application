import React from "react";
import TemperatureGradient from "./TemperatureGradient";
import { Console } from "console";

function DayComponent(props: any) {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>{props.match.params.day}</h3>

      <TemperatureGradient {...props} />
    </>
  );
}
export default DayComponent;
