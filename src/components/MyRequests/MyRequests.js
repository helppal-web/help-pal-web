import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './MyRequests.scss';
import { cancelRequest, acceptRequest } from '../../actions';
import Request, { responseTypes } from '../../components/Request/Request';
import { CardDeck } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

function MyRequests({ requests }) {

    const [localRequests, setLocalRequests] = useState(requests)
    const { t } = useTranslation();

    return (
        <div className="container text-start">
            <TextField className="search-bar mx-4 mt-3" label="Search..." type="search" variant="outlined" onChange={filter} />
            <CardDeck className="row mx-auto mt-4" >
                {localRequests.map((request, index) => <Request key={index} request={request} customClasses={'col-sm-4'} callback={requestCallback} />)}
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