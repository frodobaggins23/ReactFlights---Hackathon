import React from "react";
import FlightResult from "./FlightResult.js";

export default function FlightResultsTable({ results, pagination }) {
  return (
    <div className="FlightResultsTable">
      <h1>Upcoming flights...</h1>
      {results.length > 0 ? (
        results
          .slice(0, pagination)
          .map((result, index) => (
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
      ) : (
        <h2>no results</h2>
      )}
    </div>
  );
}
