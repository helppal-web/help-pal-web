import React, { Component } from 'react';
import './main.scss';
import Map from '../../components/Map/Map';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { responseTypes } from '../../helpers/requestHelpers';

class MainPage extends Component {



    render() {




        return (
            <div>
                <Map requests={this.props.requests} requestCallback={requestCallback} />
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

export default connect(mapStateToProps, null)(withTranslation()(MainPage));
