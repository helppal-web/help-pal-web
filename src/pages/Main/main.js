import React, { Component } from 'react';
import './main.scss';
import Map from '../../components/Map/map';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Popup } from 'react-leaflet';
import Request, { responseTypes } from '../../components/Request/Request';

class MainPage extends Component {
    render() {

        const markers = [];
        const { seekers } = this.props;
        const { requests } = this.props;

        if (seekers.length) {
            seekers.forEach((seeker) => {
                if (seeker && seeker.coords) {
                    markers.push(
                        {
                            name: seeker.name,
                            position: seeker.coords,
                            content: <Popup>
                                <Request callback={requestCallback} request={requests[0]} />
                            </Popup>
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

function requestCallback(responseType, request) {

    switch (responseType) {
        case responseTypes.CREATED:
            break;
        case responseTypes.UPDATED:
            break;
        case responseTypes.DIFFERENT:
            break;
        case responseTypes.IRRELEVANT:
            break;
        case responseTypes.ACCEPTED:
            console.log('acc');
            break;

        default:
            //Close popup
            break;
    }
}

const mapStateToProps = (store) => {
    const { state, requests } = store;
    return {
        seekers: state.seekers,
        requests: requests.requests
    }
}



export default connect(mapStateToProps)(withTranslation()(MainPage));