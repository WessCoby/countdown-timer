import React, { Component } from 'react';

class Buttons extends Component {

    // call startTimer() in App component
    start = () => {
        this.props.onTimerStart();
    };

    // // call pauseTimer() in App component
    pause = () => {
        this.props.onTimerPause()
    };

    // call stopTimer in App component
    stop = () => {
        this.props.onTimerStop()
    };

    // call resetTimer in App component
    reset = () => {
        this.props.onTimerReset();
    };

    render() {
        return (
                <div className="btn-group" role="group" aria-label="Control Buttons">
                    <button
                        type="button" title='Start Timer'
                        className="btn btn-outline-dark"
                        onClick={this.start}>
                            <i className="fas fa-play "></i>
                    </button>
                    <button
                        type="button" title='Pause Timer'
                        className="btn btn-outline-dark"
                        onClick={this.pause}>
                            <i className="fas fa-pause "></i>
                    </button>
                    <button
                        type="button" title='Stop Timer'
                        className="btn btn-outline-dark"
                        onClick={this.stop}>
                            <i className="fas fa-stop "></i>
                    </button>
                    <button
                        type="button" title='Reset Timer'
                        className="btn btn-outline-dark"
                        onClick={this.reset}>
                        <i className="fas fa-sync"></i>
                    </button>
                </div>
        );
    }
}
export default Buttons;