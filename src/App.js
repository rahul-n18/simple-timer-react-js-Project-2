import React, { Component } from "react"; //to create classs components
import "./App.css";

class Timer extends Component {
  //constructor

  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0, //initializes the state of timer components
    };
    this.intervalId = null; //initializing prop 'intervalId' to store ID of the interval
  }

  //componentDidMount

  componentDidMount() {
    //starting a timer
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timerValue: prevState.timerValue + 1,
      }));
    }, 1000);
  }

  //componentWillUnmount

  componentWillUnmount() {
    // clear the intervals
    clearInterval(this.intervalId); //clears the interval set in componentWillUnmount
    // to prevent memory leak
  }

  //render

  render() {
    return (
      <div className="timer-container">
        <h1>{this.state.timerValue}</h1>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true,
    };
  }

  toggleTimer = () => {
    this.setState((prevState) => ({
      showTimer: !prevState.showTimer,
    }));
  };

  render() {
    return (
      <div className="app-container">
        <button onClick={this.toggleTimer} className="toggle-button">
          {this.state.showTimer ? "Hide Timer" : "Show Timer"}
        </button>
        {this.state.showTimer && <Timer />}
      </div>
    );
  }
}

export default App;
