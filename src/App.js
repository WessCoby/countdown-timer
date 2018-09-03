import React, { Component } from 'react';
import Timer from './components/Timer';
import TimerInput from './components/TimeInput';
import Buttons from './components/Buttons';

class App extends Component {
    state = {
        seconds: 50,
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
                        <Timer />
                        <TimerInput />
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
