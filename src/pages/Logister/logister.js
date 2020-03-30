import React, { useState } from 'react';
import './logister.scss';
import Login from '../../components/Login/login';
import { login } from '../../actions/logister';
import Register from '../../components/Register/register';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';

function Logister({ logister, login }) {
    const [key, setKey] = useState(logister);

    return (
        <div className="logister-container">
            <Tabs
                id="logister-tab-control"
                activeKey={key}
                onSelect={(k) => setKey(k)}>

                <Tab eventKey="login" title="Login">
                    <Login onSubmit={login} />
                </Tab>
                <Tab eventKey="register" title="Register">
                    <Register />
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
        login: bindActionCreators(login, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logister);