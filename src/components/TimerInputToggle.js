import React, { Component } from 'react';

class TimerInputToggle extends Component {

    state = {
        isOpen: false,
    };

    // Change state to open timer input form
    openInputForm = () => {
            this.setState({
                isOpen: true
            });
    };

    // Change state to close timer input form
    closeInputForm = () => {
        this.setState({
            isOpen: false
        });
    };

    // Sends User input via prop function, handleTimerInput in App component
    setTimer = (e) => {
        e.preventDefault();
            this.setState({isOpen: false});
            this.props.inputHandler(this._newText.value);
    };

    render() {
        if(this.state.isOpen) {
            // Render timer input form
            return (
                <div className='time-input'>
                    <p className="card-text small text-primary">
                        Input Time Below To Begin <i className="fas fa-caret-down"></i>
                    </p>
                    <form onSubmit={this.setTimer}>
                        <div className='input-group mb-1'>
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-transparent" id="basic-addon1">
                                    <i className="fas fa-clock text-primary"></i>
                                </span>
                            </div>
                            <input type="number" className="form-control bg-transparent text-input-field" placeholder="Seconds"
                                  required min={30} max={359999} aria-describedby="basic-addon1" ref={input => this._newText = input}
                            />
                            <div className="input-group-append">
                                <button title='Submit Value' className="btn btn-outline-primary" type="submit">
                                    <i className="fas fa-upload text-dark"></i>
                                </button>
                            </div>
                        </div>
                        <div className="input-group mb-2 d-flex justify-content-center">
                            <button title='Clear Input Field' className="btn btn-sm btn-outline-primary text-dark mr-2" type="reset">
                                <i className="fas fa-trash-alt text-dark"></i> Clear Input
                            </button>
                            <button title='Close Input Form' className="btn btn-sm btn-outline-primary text-dark" onClick={this.closeInputForm}>
                                <i className="fas fa-window-close text-dark"></i> Close Form
                            </button>
                        </div>
                    </form>
                </div>
            );
        } else {
            // Render set timer button
            return (
                <div>
                    <button
                        className="btn btn-dark"
                        onClick={this.openInputForm}>
                        <i className="fas fa-clock"></i> Set Timer
                    </button>
                </div>
            );
        }
    }
}
export default TimerInputToggle;