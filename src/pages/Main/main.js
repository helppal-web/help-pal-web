import React, { Component } from 'react';
import './main.scss';
import Map from '../../components/Map/map';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Popup } from 'react-leaflet';

class MainPage extends Component {
    render() {

        const markers = [];
        const { seekers } = this.props;

        if (seekers.length) {
            seekers.forEach((seeker) => {
                if (seeker.location && seeker.location.position) {
                    markers.push(
                        {
                            position: seeker.location.position,
                            content: <Popup>{seeker.name}</Popup>
                        }
                    );
                }
            });
        }


        return (
            <div className="container mt-5" >
                <Map markers={markers} />
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

export default connect(mapStateToProps)(withTranslation()(MainPage));