import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import FlightResultsTable from "./components/FlightResultsTable.js";
import FlightFinder from "./components/FlightFinder.js";

class App extends Component {
  state = {
    flightResults: [],
    isLoading: false,
    pagination: 5,
    params: {
      flyFrom: "PRG",
      to: "VLC",
      dateFrom: "06/07/2019",
      dateTo: "07/07/2019",
      partner: "picky"
    }
  };
  componentDidMount() {
    this.fetchFlights();
  }

  fetchFlights = () => {
    this.setState({ isLoading: true });

    const flightUrl = new URL("https://api.skypicker.com/flights?");
    const { params } = this.state;

    flightUrl.search = new URLSearchParams(params);
    fetch(flightUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ isLoading: false, flightResults: data.data });
      });
  };

  changeSource = e => {
    const { target } = e;

    this.setState(prevState => ({
      params: { ...prevState.params, flyFrom: target.value }
    }));
  };

  changeDestination = e => {
    const { target } = e;

    this.setState(prevState => ({
      params: { ...prevState.params, to: target.value }
    }));
  };

  changeToDirect = e => {
    const { target } = e;

    this.setState(prevState => ({
      params: {
        ...prevState.params,
        max_stopovers: target.checked ? "0" : "10"
      }
    }));
  };

  showNextPage = () => {
    this.setState(prevState => ({
      pagination: prevState.pagination + 5
    }));
  };

  render() {
    return (
      <div className="App FlightContainer">
        <Navbar />
        <FlightFinder
          searchFunction={this.fetchFlights}
          changeSource={this.changeSource}
          changeDestination={this.changeDestination}
          changeToDirect={this.changeToDirect}
        />
        {this.state.isLoading ? (
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        ) : (
          <FlightResultsTable
            results={this.state.flightResults}
            pagination={this.state.pagination}
          />
        )}
        <button
          className="showMore"
          onClick={this.showNextPage}
          disabled={this.state.pagination >= this.state.flightResults.length}
        >
          Show more
        </button>
      </div>
    );
  }
}

export default App;
