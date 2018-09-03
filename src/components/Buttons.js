import React, { Component } from 'react';

class Buttons extends Component {

    alertIt = () => {
        alert('Timer Started');
    }

    render() {
        return (
                <div className="btn-group" role="group" aria-label="Control Buttons">
                    <button type="button" title='Play' className="btn btn-outline-dark" onClick={this.alertIt()}>
                            <i className="fas fa-play "></i>
                    </button>
                    <button type="button" title='Pause' className="btn btn-outline-dark">
                        <i className="fas fa-pause "></i>
                    </button>
                    <button type="button" title='Stop' className="btn btn-outline-dark">
                        <i className="fas fa-stop "></i>
                    </button>
                    <button type="button" title='Reset' className="btn btn-outline-dark">
                        <i className="fas fa-sync"></i>
                    </button>
                </div>
        );
    }
}
export default Buttons;