import React, { Component } from "react"
import "./App.css"
import Navbar from "./components/Navbar.js"
import FlightResultsTable from "./components/FlightResultsTable.js"
import FlightFinder from "./components/FlightFinder.js"

class App extends Component {
  state = {
    flightResults: [],
    isLoading: false,
    params: {
      flyFrom: "PRG",
      to: "VLC",
      dateFrom: "06/07/2019",
      dateTo: "07/07/2019",
      partner: "picky",
      limit: "5"
    }
  }
  componentDidMount() {
    this.fetchFlights()
  }

  fetchFlights = () => {
    this.setState({ isLoading: true })

    const flightUrl = new URL("https://api.skypicker.com/flights?")
    const { params } = this.state

    flightUrl.search = new URLSearchParams(params)
    fetch(flightUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ isLoading: false, flightResults: data.data })
      })
  }

  changeSource = e => {
    const { target } = e

    this.setState(prevState => ({
      params: { ...prevState.params, flyFrom: target.value }
    }))
  }

  changeDestination = e => {
    const { target } = e

    this.setState(prevState => ({
      params: { ...prevState.params, to: target.value }
    }))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <FlightFinder
          searchFunction={this.fetchFlights}
          changeSource={this.changeSource}
          changeDestination={this.changeDestination}
        />
        {this.state.isLoading ? (
          <div>Loading</div>
        ) : (
          <FlightResultsTable results={this.state.flightResults} />
        )}
      </div>
    )
  }
}

export default App
