import React, { Fragment } from "react";
import CardList from "./CardList";
import { weatherInterface } from "../../App";

function CardListContainer(props: weatherInterface) {
  return (
    <Fragment>
      <h2>Here is the daily weather forecast of 5 consecutive days!</h2>
      <CardList {...props} />
    </Fragment>
  );
}
export default CardListContainer;
