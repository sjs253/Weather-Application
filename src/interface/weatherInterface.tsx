import React from "react";

export interface weatherInterface {
  monday: {
    day: string;
    maxTemp: number;
    minTemp: number;
    main: string;
    stats: number[];
  };
  tuesday: {
    day: string;
    maxTemp: number;
    minTemp: number;
    main: string;
    stats: number[];
  };
  wednesday: {
    day: string;
    maxTemp: number;
    minTemp: number;
    main: string;
    stats: number[];
  };
  thursday: {
    day: string;
    maxTemp: number;
    minTemp: number;
    main: string;
    stats: number[];
  };
  friday: {
    day: string;
    maxTemp: number;
    minTemp: number;
    main: string;
    stats: number[];
  };
}
