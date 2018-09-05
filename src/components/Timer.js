import React, { Component } from 'react';

class Timer extends Component {


    render() {
        return (
            <div className='mb-5 timer d-flex flex-row justify-content-around w-50 mx-auto'>
                <div className='timer-hours'>
                    <h5 className="card-title display-4">{this.props.hr}</h5>
                    <small className="timer-label small text-primary">hours</small>
                </div>
                <div className="separator card-title display-4">:</div>
                <div className='timer-minutes'>
                    <h5 className="card-title display-4">{this.props.min}</h5>
                    <small id="hour" className="timer-label small text-primary">minutes</small>
                </div>
                <div className="separator card-title display-4">:</div>
                <div className='timer-seconds'>
                    <h5 className="card-title display-4">{this.props.sec}</h5>
                    <small id="hour" className="timer-label small text-primary">seconds</small>
                </div>
            </div>
        );
    }
}
export default Timer;