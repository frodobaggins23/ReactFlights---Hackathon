import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import FlightResultsTable from "./components/FlightResultsTable.js";
import FlightFinder from "./components/FlightFinder.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FlightFinder />
      <FlightResultsTable />
    </div>
  );
}

export default App;
