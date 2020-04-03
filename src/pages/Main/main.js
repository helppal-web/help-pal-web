import React, { Component } from 'react';
import './main.scss';
import Map from '../../components/Map/Map';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Popup } from 'react-leaflet';
import { cancelRequest, acceptRequest, createRequest } from '../../actions';
import Request from '../../components/Request/Request';
import SideMenu from '../../components/SideMenu/SideMenu';
import helpCall from '../../assets/helpCall.png';
import { responseTypes, requestTypes } from '../../helpers/requestHelpers';
import NewRequestModal from '../../components/NewRequestModal/NewRequestModal';

class MainPage extends Component {

    state = {
        showNewRequest: false
    }

    onNewRequestSubmitted = (data) =>{
        this.props.onCreateRequest(data)
    }

    hideRequestModal = () => {
        this.setState({ showNewRequest: false })
    }
    
    showRequestModal = () => {
        this.setState({ showNewRequest: true })
    }

    render() {

        const { t } = this.props;
        const markers = [];
        const { requests } = this.props;

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
                <SideMenu handleShowNewRequest={this.showRequestModal.bind(this)} />
                <Map markers={markers} showModal={this.showRequestModal.bind(this)} />
                <NewRequestModal handleSubmit={this.onNewRequestSubmitted} hide={this.hideRequestModal} isOpened={this.state.showNewRequest}></NewRequestModal>
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
    const { requests } = store;
    return {
        requests: requests.requests
    }
}


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        cancelRequest: bindActionCreators(cancelRequest, dispatch),
        acceptRequest: bindActionCreators(acceptRequest, dispatch),
        onCreateRequest: bindActionCreators(createRequest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(MainPage));
