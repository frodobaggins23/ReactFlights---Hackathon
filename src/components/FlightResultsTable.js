import React from "react";
import FlightResult from "./FlightResult.js";

export default function FlightResultsTable({ results }) {
  return (
    <div>
      <h1>This is the Flight table </h1>
      {results.map((result, index) => (
        <FlightResult
          departure={result.cityFrom}
          arrival={result.cityTo}
          dTime={result.dTime}
          aTime={result.aTime}
          price={result.price}
          key={index}
          flightNo={index}
        />
      ))}
    </div>
  );
}
