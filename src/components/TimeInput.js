import React, { Component } from 'react';

class TimeInput extends Component {
    render() {
        return (
            <div className='time-input'>
                <p className="card-text small">
                   Input Time Below To Begin <i className="fas fa-caret-down"></i>
                </p>
                <form>
                    <div className='input-group mb-3'>
                        <div className="input-group-prepend">
                        <span className="input-group-text bg-transparent" id="basic-addon1">
                            <i className="fas fa-clock text-primary"></i>
                        </span>
                        </div>
                        <input type="text" className="form-control bg-transparent text-input-field" placeholder="Seconds"
                               aria-describedby="basic-addon1"
                        />
                        <div className="input-group-append">
                            <button title='Submit' className="btn btn-outline-primary" type="submit">
                                <i className="fas fa-upload text-dark"></i>
                            </button>
                        </div>
                        <div className="input-group-append">
                            <button title='Clear Input' className="btn btn-outline-primary" type="reset">
                                <i className="fas fa-trash-alt text-dark"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}
export default TimeInput;