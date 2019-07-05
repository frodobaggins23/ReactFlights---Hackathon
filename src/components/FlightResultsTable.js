import React from "react";
import FlightResult from "./FlightResult.js";

export default function FlightResultsTable({ results }) {
  return (
    <div>
      <h1>This is the Flight table </h1>
      {results.length > 0
        ? results.map((result, index) => (
            <FlightResult
              departure={result.cityFrom}
              arrival={result.cityTo}
              dTime={result.dTime}
              aTime={result.aTime}
              stopovers={result.route.length - 1}
              price={result.price}
              key={index}
              flightNo={index}
            />
          ))
        : "no results"}
    </div>
  );
}
