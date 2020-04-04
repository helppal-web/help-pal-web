import React, { Component } from 'react';
import './main.scss';
import Map from '../../components/Map/Map';
import { Modal } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Popup } from 'react-leaflet';
import { cancelRequest, acceptRequest, createRequest } from '../../actions';
import Request from '../../components/Request/Request';
import SideMenu from '../../components/SideMenu/SideMenu';
import helpCall from '../../assets/helpCall.png';
import { responseTypes, requestTypes } from '../../helpers';
import newCall from '../../assets/newCall.png';
import NewRequest from '../../components/NewRequest/NewRequest';

class MainPage extends Component {

    state = {
        showNewRequest: false
    }

    render() {

        const { t, requests } = this.props;
        const markers = [];

        if (requests && requests.length) {
            requests.forEach((request) => {
                if (request && request.location) {
                    markers.push(
                        {
                            name: request.name,
                            position: request.location,
                            content: <Popup style={{ maxWidth: 'auto' }}>
                                <div className="modal-content border-none">
                                    <div className="modal-header">
                                        <div className="modal-title h4">
                                            <img alt="" src={helpCall} width="20" />
                                            {t(requestTypes.HELP) + '!'}
                                        </div>
                                    </div>
                                    <Request callback={requestCallback} request={request} customCardClasses="border-none" />
                                </div>
                            </Popup>
                        }
                    );
                }
            });
        }


        return (
            <div className="d-flex" >
                <SideMenu handleShowNewRequest={showRequestModal.bind(this)} />
                <Map markers={markers} showModal={showRequestModal.bind(this)} />

                <Modal centered show={this.state.showNewRequest} onHide={hideRequestModal.bind(this)} dialogClassName="request-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <img alt="" src={newCall} width="20" />
                            {t('New Call')}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <NewRequest hide={hideRequestModal} handleSubmit={createRequest} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

function hideRequestModal() {
    this.setState({ showNewRequest: false })
}

function showRequestModal() {
    this.setState({ showNewRequest: true })
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
    const { requests, user } = store;
    return {
        requests: requests.requests,
        currentUser: user.currentUser
    }
}


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        cancelRequest: bindActionCreators(cancelRequest, dispatch),
        acceptRequest: bindActionCreators(acceptRequest, dispatch),
        createRequest: bindActionCreators(createRequest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(MainPage));
