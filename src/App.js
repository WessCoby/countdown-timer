import React, { Component } from 'react';
import Timer from './components/Timer';
import Buttons from './components/Buttons';
import ToggleableTimerForm from "./components/ToggleableTimerForm";

class App extends Component {

    //  Add a leading 0 where there is a single timer digit to be displayed
    // Makes the timer display in the format 00:00:00
    leadingZero = (number) => {
        if (number <= 9) {
            number = '0' + number;
        }
        return number;
    };

    // Convert time in seconds to the hh:mm:ss format
    // Returns an object with properties hr, min and sec respectively for the timer
    convertSecondsToTimer = (timeInSeconds) => {
        if (timeInSeconds < 60) {
            return {
                hr: this.leadingZero(0),
                min: this.leadingZero(0),
                sec: this.leadingZero(timeInSeconds),
            } // return 00:00:ss if timeInSeconds is less than 60
        } else if (timeInSeconds >= 60 && timeInSeconds < 3600) {
            let minutes = parseInt(timeInSeconds / 60);
            let seconds = timeInSeconds % 60;
            return {
                hr: this.leadingZero(0),
                min: this.leadingZero(minutes),
                sec: this.leadingZero(seconds),
            } // return 00:mm:ss if timeInSeconds ranges from 60 to 3600 (3600 not included)
        }
        else if (timeInSeconds >= 3600 && timeInSeconds <= 359999) {
            let hours = parseInt(timeInSeconds / 3600);
            let minutes = parseInt((timeInSeconds % 3600) / 60);
            let seconds = timeInSeconds % 60;
            return {
                hr: this.leadingZero(hours),
                min: this.leadingZero(minutes),
                sec: this.leadingZero(seconds),
            }
        }
        else {
            return {
                hr: this.leadingZero(0),
                min: this.leadingZero(0),
                sec: this.leadingZero(0),
            }
        }
    };

    // Component Initial State 00:00:00
    state = {
        timer: {
            hr: this.leadingZero(0),
            min: this.leadingZero(0),
            sec: this.leadingZero(0),
        }
    };

    // Change State [ Enforcing State Immutability with the Use of Object.assign() ]
    stateMod = (newTimeInSeconds) => {
        let newTimer = Object.assign({}, this.state.timer);
        newTimer = this.convertSecondsToTimer(newTimeInSeconds);
        this.setState({timer: newTimer});
    };

    handleTimerInput = (seconds) => {
        this.stateMod(seconds);
    };

  render() {
    return (
      <div className="container h-100 mt-2 mb-2">
        <div className="row d-flex justify-content-center align-items-center main-row">
            <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
                <div className="card text-center bg-transparent shadow">
                    <div className="card-header bg-primary text-dark text-uppercase">
                        <h2>Countdown Timer</h2>
                    </div>
                    <div className="card-body">
                        <Timer
                            hr={this.state.timer.hr}
                            min={this.state.timer.min}
                            sec={this.state.timer.sec}
                        />
                        <ToggleableTimerForm inputHandler={this.handleTimerInput} />
                    </div>
                    <div className="card-footer bg-primary">
                        <Buttons />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default App;
