import React, { Component } from 'react';
import './main.scss';
import Map from '../../components/Map/map';
import { connect } from 'react-redux';

class MainPage extends Component {
    render() {
        return (
            <div className="main-container">
                {this.props.seekers.map((seeker, index) =>
                    <div key={seeker.id} className="seeker">
                        {seeker.name}
                    </div>
                )}
                <Map />
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    const { state } = store;
    return {
        seekers: state.seekers
    }
}

export default connect(mapStateToProps)(MainPage);