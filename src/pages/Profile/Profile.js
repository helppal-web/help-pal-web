import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Profile.scss';
import { Tabs, Tab } from 'react-bootstrap';
import GeneralInfo from "../../components/GeneralInfo/GeneralInfo"
import MyRequests from "../../components/MyRequests/MyRequests"


export default function Profile(props) {

    const { t } = useTranslation();
    const [currentTab, setTab] = useState('generalInfo');

    const tabs = [
        {
            key: 'generalInfo',
            title: t('General Info'),
            content: <GeneralInfo />
        },
        {
            key: 'myRequests',
            title: t('My Requests'),
            content: <MyRequests />
        },
        {
            key: 'history',
            title: t('My History'),
            content: 'TODO: history.... :)'
        }
    ];

    return (
        <div className="container">
            <Tabs
                id="profile-tab-control"
                activeKey={currentTab}
                onSelect={(k) => setTab(k)}>
                {tabs.map((tab, index) => (
                    <Tab key={index} eventKey={tab.key} title={tab.title}>
                        {tab.content}
                    </Tab>
                ))}
            </Tabs>

        </div>
    )

}
