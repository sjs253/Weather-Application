import React from "react";
import TemperatureGradient from "./TemperatureGradient";
import { Console } from "console";
import { Link } from "react-router-dom";
import Colorpicker from "../Colorpicker/Colorpicker";
function DayComponent(props: any) {
  return (
    <>
      {/* <h3 style={{ textAlign: "center" }}>{props.match.params.day}</h3> */}

      <TemperatureGradient {...props} />
      {/* <Colorpicker /> */}
    </>
  );
}
export default DayComponent;
