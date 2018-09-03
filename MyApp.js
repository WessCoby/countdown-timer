import React, { Component } from 'react';

class MyApp extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
);