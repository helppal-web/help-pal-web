import React, { useState } from 'react';
import './Logister.scss';
import Login from '../../components/Login/Login';
import { login, register, fetchUserById } from '../../actions';
import Register from '../../components/Register/Register';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { getUserFromStorage } from '../../helpers';
import { useHistory } from 'react-router-dom';

function Logister({ logister, login, currentUser }) {
    const [key, setKey] = useState(logister);
    const { t } = useTranslation();
    const history = useHistory();

    const user = getUserFromStorage();
    if (user && user.id) {
        if (!currentUser) {
            fetchUserById(user.id);
        }
        history.push('/');
    }

    return (
        <div className="logister-container">
            <Tabs
                id="logister-tab-control"
                activeKey={key}
                onSelect={(k) => setKey(k)}>

                <Tab eventKey="login" title={t('Login')}>
                    <Login onSubmit={login} />
                </Tab>
                <Tab eventKey="register" title={t('Register')}>
                    <Register onSubmit={register} />
                </Tab>
            </Tabs>
        </div>
    );
}

const mapStateToProps = (store) => {
    const { user } = store;
    return {
        currentUser: user.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        login: bindActionCreators(login, dispatch),
        register: bindActionCreators(register, dispatch),
        fetchUserById: bindActionCreators(fetchUserById, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logister);