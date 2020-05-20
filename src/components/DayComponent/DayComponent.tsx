import React from "react";

function DayComponent(props: any) {
  return <h2>{props.match.params.day}</h2>;
}

export default DayComponent;
