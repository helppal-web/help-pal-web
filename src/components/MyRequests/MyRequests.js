import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './MyRequests.scss';
import { cancelRequest, acceptRequest } from '../../actions';
import Request from '../../components/Request/Request';
import { responseTypes, requestStatusCode } from '../../helpers/requestHelpers';
import { CardDeck } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

function MyRequests({ requests }) {

    console.log(requests)
    const [localRequests, setLocalRequests] = useState({})

    useEffect( () => { if(localRequests !== requests) {
        setLocalRequests(requests)
    }}, [requests])
    console.log(localRequests)

    const { t } = useTranslation();

    function sortByStatus(a, b) {
        return requestStatusCode[a.status] - requestStatusCode[b.status];
    }

    let requestsData = localRequests && localRequests.length ? localRequests.sort(sortByStatus).map((request) => <Request key={request.id} request={request} customClasses={'col-sm-4'} callback={requestCallback} />)
        : <div>No Requests found!</div>

    return (
        <div className="container text-start">
            <TextField className="search-bar mx-4 mt-3" label="Search..." type="search" variant="outlined" onChange={filter} />
            <CardDeck className="row mx-auto mt-4" >
                {requestsData}
            </CardDeck>
        </div>
    )

    function filter(event) {
        let updatedList = requests;
        updatedList = updatedList.filter(function (item) {
            // TODO: Filter by date closed
            return search(event, [item.destProfile.name, item.status, item.category]);
        });
        setLocalRequests(updatedList);
    }

    function search(event, props = []) {
        if (props.length) {
            return props.some((prop, index) => prop.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1);
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