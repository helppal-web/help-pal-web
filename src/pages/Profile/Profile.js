import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Profile.scss';
import Request from '../../components/Request/Request';
import { CardDeck, Tabs, Tab } from 'react-bootstrap';
import GeneralInfo from "../../components/GeneralInfo/GeneralInfo"


export default function Profile() {

    // TODO: Remove - hardcoded!!!!
    const requests = [
        {
            category: 'Supermarket',
            urgency: 'Whenever',
            forAFriend: false,
            name: 'Omer Fishman',
            friendsName: 'Yosi LoOmer',
            friendsPhoneNumber: '0522424395',
            address: 'King George 68, Tel-Aviv, Israel',
            comments: "Take your Time"
        },
        {
            category: 'Medicine',
            urgency: 'Urgent',
            forAFriend: false,
            name: 'Omer Fishman',
            friendsName: 'Yosi LoOmer',
            friendsPhoneNumber: '0522424395',
            address: 'King George 68, Tel-Aviv, Israel',
            comments: "Be fast please!!"
        }
    ]

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
                        {requests.map((request, index) => <Request key={index} request={request} />)}
                    </CardDeck>
                </Tab>
                <Tab eventKey="history" title={t('My History')}>
                    TODO: history.... :)
                </Tab>
            </Tabs>

        </div>
    )

}
