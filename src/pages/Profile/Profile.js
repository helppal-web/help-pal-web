import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './Profile.scss';
import { cancelRequest, acceptRequest } from '../../actions';
import Request, { responseTypes } from '../../components/Request/Request';
import { CardDeck, Tabs, Tab } from 'react-bootstrap';
import GeneralInfo from "../../components/GeneralInfo/GeneralInfo"


function Profile({ requests }) {

    const { t } = useTranslation();
    const [currentTab, setTab] = useState('generalInfo');

    return (
        <div className="container">
            <Tabs
                id="profile-tab-control"
                activeKey={currentTab}
                onSelect={(k) => setTab(k)}>
                <Tab eventKey="generalInfo" title={t('General Info')}>
                    <GeneralInfo></GeneralInfo>
                </Tab>
                <Tab eventKey="myRequests" title={t('My Requests')}>
                    <CardDeck className="row mx-auto mt-4" >
                        {requests.map((request, index) => <Request key={index} request={request} customClasses={'col-sm-4'} callback={requestCallback} />)}
                    </CardDeck>
                </Tab>
                <Tab eventKey="history" title={t('My History')}>
                    TODO: history.... :)
                </Tab>
            </Tabs>

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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);