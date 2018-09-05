import React, { Component } from 'react';

class ToggleableTimerForm extends Component {

    state = {
        isOpen: false,
    };

    handleTimerInputFormClick = () => {
            this.setState({isOpen: true});
    };

    setTimer = (e) => {
        e.preventDefault();
            this.setState({isOpen: false});
            this.props.inputHandler(this._newText.value);
    };

    render() {
        if(this.state.isOpen) {
            return (
                <div className='time-input'>
                    <p className="card-text small text-primary">
                        Input Time Below To Begin <i className="fas fa-caret-down"></i>
                    </p>
                    <form onSubmit={this.setTimer}>
                        <div className='input-group mb-3'>
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
                            <div className="input-group-append">
                                <button title='Clear Input Field' className="btn btn-outline-primary" type="reset">
                                    <i className="fas fa-trash-alt text-dark"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <button
                        className="btn btn-dark"
                        onClick={this.handleTimerInputFormClick}>
                        <i className="fas fa-clock"></i> Set Timer
                    </button>
                </div>
            );
        }
    }
}
export default ToggleableTimerForm;