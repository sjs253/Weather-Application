import React from "react";

function DayComponent(props: any) {
  return (
    <>
      <h3>{props.match.params.day}</h3>
      <div>{props.weatherstate.monday.main}</div>
    </>
  );
}
export default DayComponent;
