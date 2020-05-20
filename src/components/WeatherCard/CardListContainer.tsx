import React, { Fragment } from "react";
import CardList from "./CardList";

function CardListContainer() {
  return (
    <Fragment>
      <h2>Here is the daily weather forecast of 5 consecutive days!</h2>
      <CardList />
    </Fragment>
  );
}
export default CardListContainer;
