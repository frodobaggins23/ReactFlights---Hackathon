import React from "react";
import { DateTime } from "luxon";

const FlightResult = ({
  departure,
  arrival,
  dTime,
  aTime,
  price,
  stopovers,
  flightNo
}) => {
  return (
    <div className="flightResult">
      <div className="flightResultDetail">
        <div>
          <h4>
            <span>Flight no:</span> {flightNo + 1}
          </h4>
        </div>
        <div>
          <span>From:</span>
          {departure}
        </div>
        <div>
          <span>To:</span>
          {arrival}
        </div>
        <div>
          <span>Departs at:</span>
          {DateTime.fromMillis(dTime * 1000).toFormat("dd-LL-yyyy hh:mm")}
        </div>
        <div>
          <span>Arrives at:</span>
          {DateTime.fromMillis(aTime * 1000).toFormat("dd-LL-yyyy hh:mm")}
        </div>
        <div>
          <span>Number of stopovers:</span>
          {stopovers > 0 ? stopovers : "direct"}
        </div>
        <div>
          <span>Price:</span>
          {price} EUR
        </div>
      </div>
    </div>
  );
};

export default FlightResult;
