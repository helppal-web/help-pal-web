
import React, { useState, useEffect } from 'react';
import Header from '../components/Header/header';
import { Route } from 'react-router-dom';
import WebSocketApi from '../helpers/websocket';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';




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

    return (
        <Route {...rest} render={matchProps => (
            <AppLayout>
                <Component {...matchProps} />
                <Modal centered show={notificationsModal} onHide={setNotificationsModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {t('Notifications')}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                </Modal>
            </AppLayout>
        )} />
    )
};

export default AppLayoutRoute; 