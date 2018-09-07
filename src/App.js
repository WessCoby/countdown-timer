import React, { Component } from 'react';
import Timer from './components/Timer';
import Buttons from './components/Buttons';
import TimerInputToggle from "./components/TimerInputToggle";

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
            let minutes = parseInt((timeInSeconds / 60), 10);
            let seconds = timeInSeconds % 60;
            return {
                hr: this.leadingZero(0),
                min: this.leadingZero(minutes),
                sec: this.leadingZero(seconds),
            } // return 00:mm:ss if timeInSeconds ranges from 60 to 3600 (3600 not included)
        }
        else if (timeInSeconds >= 3600 && timeInSeconds <= 359999) {
            let hours = parseInt((timeInSeconds / 3600), 10);
            let minutes = parseInt(((timeInSeconds % 3600) / 60), 10);
            let seconds = timeInSeconds % 60;
            return {
                hr: this.leadingZero(hours),
                min: this.leadingZero(minutes),
                sec: this.leadingZero(seconds),
            } // return hh:mm:ss. Max = 99:59:59 equivalent to 359999 seconds
        }
    };

    // Convert Timer from hh:mm:ss to seconds
    // Accepts a timer object and returns a single value (seconds) from its hr, min and sec properties
    convertTimerToSeconds = (timerObject) => {
        return parseInt((timerObject.hr * 3600), 10) + parseInt((timerObject.min  * 60), 10) + parseInt(timerObject.sec, 10);
    };

    // App Component Initial State 00:00:00
    state = {
        timer: {
            hr: this.leadingZero(0),
            min: this.leadingZero(0),
            sec: this.leadingZero(0),
        },
        status: null,
        userInput: 0
    };

    updateInterval; // Variable to hold timer update interval function

    // setState function used to change state, timer
    timerStateMod = (newTimeInSeconds) => {
        let newTimer = Object.assign({}, this.state.timer);
        newTimer = this.convertSecondsToTimer(newTimeInSeconds);
        this.setState(
            () => ({timer: newTimer})
        );
    };

    // setState function used to change state, status
    setStatus = (action) => {
        this.setState(
            () => ({ status: action })
        );
    };


    // Interactive state change. Assigning User input values to state
    // Passed to TimerInputToggle Component as Prop
    handleTimerInput = (seconds) => {
        clearInterval(this.updateInterval);
        this.setState((prevState) => {
            return ({
                userInput: seconds,
                timer: this.convertSecondsToTimer(seconds),
                status: 'ready'
            });
        });
    };

    // Initiates the countdown timer. Used in setInterval()
    countdown = () => {
        if (this.convertTimerToSeconds(this.state.timer) > 0) {
            let secs = this.convertTimerToSeconds(this.state.timer);
            secs--;
            this.timerStateMod(secs);
        } else {
            console.log(this.state.status);
            clearInterval(this.updateInterval);
        }
    };

    // Start Countdown Timer
    startTimer = () => {
        console.log(this.state.status);
        if (
            (this.state.status === "ready" && this.state.status !== null) ||
            this.state.status === "paused" || this.state.status === "stopped"
        ) {
            this.updateInterval = setInterval(
                () => {this.countdown()},
                1000
            );
            this.setStatus("started");
        } else if (this.state.status === "started") {
            alert("Timer already running");
        } else {
            alert("Set a timer to start");
        }
    };

    // Pause Countdown Timer
    pauseTimer = () => {
        if (this.state.status === "started") {
            clearInterval(this.updateInterval);
            this.setStatus("paused");
        } else if (
            this.state.status === null ||
            this.state.status === "ready" ||
            this.state.status === "paused" ||
            this.state.status === "stopped"
        ) {
            alert("Timer not started");
        }
    };

    // Stops timer, returns state to the timer value provided by user
    stopTimer = () => {
        if (this.state.status === "started" || this.state.status === "paused") {
            clearInterval(this.updateInterval);
            this.timerStateMod(this.state.userInput);
            this.setStatus("stopped");
        } else if (this.state.status === null || this.state.status === "ready" || this.state.status === "stopped") {
            alert("Timer not running");
        }
    };

    // Reset Timer. Set state to 00:00:00 and status back to null
    resetTimer = () => {
        if (this.state.status !== null) {
            clearInterval(this.updateInterval);
            this.timerStateMod(0);
            this.setStatus(null);
        }
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
                        <TimerInputToggle inputHandler={this.handleTimerInput} />
                    </div>
                    <div className="card-footer bg-primary">
                        <Buttons
                            onTimerStart={this.startTimer}
                            onTimerPause={this.pauseTimer}
                            onTimerStop={this.stopTimer}
                            onTimerReset={this.resetTimer}
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default App;
