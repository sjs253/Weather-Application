import React, { Fragment } from "react";
import CardList from "./CardList";
import { weatherInterface } from "../../interface/weatherInterface";
import weatherData from "../../JsonData/Data";

function CardListContainer(props: weatherInterface) {
  return (
    <Fragment>
      {/* <h2 style={{ textAlign: "center" }}>
        Here is the daily weather forecast of 5 consecutive days!
      </h2> */}
      <div style={{ width: 1250, marginRight: "auto", marginLeft: "auto" }}>
        <CardList {...props} />
      </div>
    </Fragment>
  );
}
export default CardListContainer;
