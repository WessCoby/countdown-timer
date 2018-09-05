import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
                <div className="btn-group" role="group" aria-label="Control Buttons">
                    <button type="button" title='Start Timer' className="btn btn-outline-dark">
                            <i className="fas fa-play "></i>
                    </button>
                    <button type="button" title='Pause Timer' className="btn btn-outline-dark">
                        <i className="fas fa-pause "></i>
                    </button>
                    <button type="button" title='Stop Timer' className="btn btn-outline-dark">
                        <i className="fas fa-stop "></i>
                    </button>
                    <button type="button" title='Reset Timer' className="btn btn-outline-dark">
                        <i className="fas fa-sync"></i>
                    </button>
                </div>
        );
    }
}
export default Buttons;