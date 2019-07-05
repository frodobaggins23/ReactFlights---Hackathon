import React from "react"

export default function FlightFinder(props) {
  return (
    <>
      <h2>Origin</h2>
      <select onChange={props.changeSource} name="departure">
        <option value="PRG">Prague</option>
        <option value="BER">Berlin</option>
        <option value="WAW">Warsaw</option>
        <option value="PED">Pardubice</option>
      </select>
      <h2>Destination</h2>
      <select onChange={props.changeDestination} name="destination">
        <option value="VLC">Valencia</option>
        <option value="BCN">Barcelona</option>
        <option value="MAD">Madrid</option>
        <option value="LIN">Milano</option>
        <option value="ATH">Athens</option>
      </select>

      <input onClick={props.searchFunction} type="submit" value="Search" />
    </>
  )
}
