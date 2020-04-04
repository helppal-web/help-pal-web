import React, { useState } from 'react';
import './Logister.scss';
import Login from '../../components/Login/Login';
import { login, register, fetchUserById } from '../../actions';
import Register from '../../components/Register/Register';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { getUserFromStorage } from '../../helpers';
import { useHistory } from 'react-router-dom';
import coloredLogo from '../../assets/helppal-logo-colored.svg';
import logisterImage from '../../assets/logister-image.png';

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
        <div className="logister-page">
            <div className="logister-container">
                <Row>
                    <Col>
                        <div className="logister-form-container">
                            <img className="app-logo colored" src={coloredLogo} alt="" />
                            <Tab.Container
                                id="logister-tab-control"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}>
                                
                                {/* TODO TODO TODO!!!!!!! looks awful*/}
                                <Nav.Link eventKey="login">{t('Sign in')}</Nav.Link>
                                and go to HelpPal
                                <Nav.Link eventKey="register">{t('Sign up')}</Nav.Link>
                                
                                <Tab.Content>
                                    <Tab.Pane eventKey="login">
                                        <Login onSubmit={login} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="register">
                                        <Register onSubmit={register} />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                    <Col>
                        <div className="logister-image">
                            <img alt="" src={logisterImage} />
                        </div>
                    </Col>
                </Row>
            </div>
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