import React, { Component } from 'react';
import './main.scss';
import Map from '../../components/Map/map';

class App extends Component {
    render() {
        return (
            <div className="main-container">
                <Map />
            </div>
        );
    }
}

export default App;
