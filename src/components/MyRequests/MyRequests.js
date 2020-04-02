import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './MyRequests.scss';
import { cancelRequest, acceptRequest } from '../../actions';
import Request, { responseTypes } from '../../components/Request/Request';
import { CardDeck } from 'react-bootstrap';


function MyRequests({ requests }) {

    const { t } = useTranslation();

    return (
        <div className="container">
            <CardDeck className="row mx-auto mt-4" >
                {requests.map((request, index) => <Request key={index} request={request} customClasses={'col-sm-4'} callback={requestCallback} />)}
            </CardDeck>
        </div>
    )

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
        acceptRequest: bindActionCreators(acceptRequest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRequests);