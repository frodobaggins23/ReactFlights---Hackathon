import React, { Component } from "react"
import "./App.css"
import Navbar from "./components/Navbar.js"
import FlightResultsTable from "./components/FlightResultsTable.js"
import FlightFinder from "./components/FlightFinder.js"

class App extends Component {
  state = {
    flightResults: []
  }
  componentDidMount() {
    const flightUrl = new URL("https://api.skypicker.com/flights?")
    const params = {
      flyFrom: "PRG",
      to: "VLC",
      dateFrom: "06/07/2019",
      dateTo: "07/07/2019",
      partner: "picky",
      limit: "5"
    }
    flightUrl.search = new URLSearchParams(params)
    console.log("flightUrl", flightUrl)
    fetch(flightUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ flightResults: data.data })
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <FlightFinder />
        <FlightResultsTable results={this.state.flightResults} />
      </div>
    )
  }
}

export default App
