import React, { useState } from 'react';
import './logister.scss';
import Login from '../../components/Login/login';
import { login, register } from '../../actions/logister';
import Register from '../../components/Register/register';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Logister({ logister }) {
    const [key, setKey] = useState(logister);
    const { t } = useTranslation();

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
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        login: bindActionCreators(login, dispatch),
        register: bindActionCreators(register, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logister);