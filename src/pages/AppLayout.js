
import React, { useState, useEffect } from 'react';
import Header from '../components/Header/header';
import { Route, useHistory } from 'react-router-dom';
import WebSocketApi from '../helpers/websocket';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { fetchUserById } from '../actions';
import { getUserFromStorage } from '../helpers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



const AppLayout = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

const AppLayoutRoute = ({ currentUser, fetchUserById, component: Component, ...rest }) => {

    const { t } = useTranslation();
    const history = useHistory();

    const [notificationsModal, setNotificationsModal] = useState(false);

    useEffect(() => {
        new WebSocketApi(websocketMessageHandler);
    })

    const websocketMessageHandler = (e) => {

    }

    const user = getUserFromStorage();
    if (user && user.id) {
        if (!currentUser) {
            fetchUserById(user.id);
        }
    } else {
        history.push('/login');
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
            </AppLayout >
        )} />
    )
};

const mapStateToProps = (store) => {
    const { user } = store;
    return {
        currentUser: user.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        fetchUserById: bindActionCreators(fetchUserById, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayoutRoute);