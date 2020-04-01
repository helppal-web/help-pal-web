import React, { Component } from 'react';
import './main.scss';
import Map from '../../components/Map/map';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Popup } from 'react-leaflet';
import { cancelRequest, acceptRequest } from '../../actions';
import Request, { responseTypes, requestTypes } from '../../components/Request/Request';
import SideMenu from '../../components/SideMenu/SideMenu';
import helpCall from '../../assets/helpCall.png';
import { Modal } from 'react-bootstrap';

class MainPage extends Component {
    render() {

        const { t } = this.props;
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
                            content: <Popup style={{ maxWidth: 'auto' }}>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="modal-title h4">
                                            <img alt="" src={helpCall} width="20" />
                                            {t(requestTypes.HELP) + '!'}
                                        </div>
                                    </div>
                                    <Request callback={requestCallback} request={requests[0]} />
                                </div>
                            </Popup>
                        }
                    );
                }
            });
        }


        return (
            <div className="d-flex" >
                <SideMenu />
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
            cancelRequest(request);
            break;
        case responseTypes.ACCEPTED:
            acceptRequest(request);
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


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        cancelRequest: bindActionCreators(cancelRequest, dispatch),
        acceptRequest: bindActionCreators(acceptRequest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(MainPage));