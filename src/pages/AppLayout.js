
import React, { useState, useEffect } from 'react';
import Header from '../components/Header/header';
import { Route } from 'react-router-dom';
import WebSocketApi from '../helpers/websocket';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import SideMenu from "../components/SideMenu/SideMenu";


const AppLayout = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

const AppLayoutRoute = ({ component: Component, ...rest }) => {

    const { t } = useTranslation();

    const [notificationsModal, setNotificationsModal] = useState(false);

    useEffect(() => {
        new WebSocketApi(websocketMessageHandler);
    })

    const websocketMessageHandler = (e) => {

    }

    const showNewRequestModalHandler = () => {

    }

    return (
        <Route {...rest} render={matchProps => (
            <AppLayout>
                <div className="d-flex" style={{ paddingTop: '130px' }} >
                    <SideMenu handleShowNewRequest={showNewRequestModalHandler} />
                    <div className="flex-grow-1">
                        <Component {...matchProps} />
                    </div>

                </div>

                <Modal centered show={notificationsModal} onHide={setNotificationsModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {t('Notifications')}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                </Modal>
            </AppLayout >
        )} />
    )
};

export default AppLayoutRoute;