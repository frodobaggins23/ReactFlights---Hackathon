import React from "react";
import { DateTime } from "luxon";

const FlightResult = ({
  departure,
  arrival,
  dTime,
  aTime,
  price,
  flightNo
}) => {
  return (
    <div>
      <h4>Flight no: {flightNo + 1}</h4>
      <div>From:{departure}</div>
      <div>To:{arrival}</div>
      <div>
        Departs at:
        {DateTime.fromMillis(dTime * 1000).toFormat("dd-LL-yyyy hh:mm")}
      </div>
      <div>
        Arrives at:
        {DateTime.fromMillis(aTime * 1000).toFormat("dd-LL-yyyy hh:mm")}
      </div>
      <div>Price:{price}</div>
    </div>
  );
};

export default FlightResult;
