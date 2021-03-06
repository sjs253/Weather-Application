import React, { Fragment } from "react";
import { Image, Text } from "office-ui-fabric-react";
import { PrimaryButton } from "@fluentui/react";
import { Card } from "@uifabric/react-cards";
import { weatherInterface } from "../../interface/weatherInterface";
import mapWeatherToImage from "./mapWeatherToImage";
import { Link } from "react-router-dom";
const dummyarray = [1, 2, 3, 4, 5];

function CardList(props: weatherInterface) {
  function mapNumberToDay(number: any) {
    switch (number) {
      case 1:
        return props.monday;
      case 2:
        return props.tuesday;
      case 3:
        return props.wednesday;
      case 4:
        return props.thursday;
      case 5:
        return props.friday;
    }
  }
  return (
    <Fragment>
      <div style={{ width: 1500, margin: "auto" }}>
        {dummyarray.map((number) => (
          <div style={{ float: "left", margin: 16 }}>
            <CardDisplay day={mapNumberToDay(number)} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

function CardDisplay(props: any) {
  return (
    <Card>
      <Card.Item>
        <Image
          src={mapWeatherToImage(props.day.main)}
          alt="Weather Image"
          height={100}
          width={100}
        ></Image>
      </Card.Item>
      <Card.Section>
        <Text style={{ textAlign: "left", margin: 8 }}>
          <span style={{ fontWeight: "bold" }}>Day: </span>
          <Link to={{ pathname: "/" + props.day.day }}>{props.day.day}</Link>
        </Text>
        <Text style={{ textAlign: "left", margin: 8 }}>
          <span style={{ fontWeight: "bold" }}>Weather: </span>
          {props.day.main}
        </Text>
        <Text style={{ textAlign: "left", margin: 8 }}>
          <span style={{ fontWeight: "bold" }}>MaxTemp: </span>
          {props.day.maxTemp}
        </Text>
        <Text style={{ textAlign: "left", margin: 8 }}>
          <span style={{ fontWeight: "bold" }}>MinTemp: </span>
          {props.day.minTemp}
        </Text>
      </Card.Section>
    </Card>
  );
}
export default CardList;
