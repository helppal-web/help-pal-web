import React from 'react';
import './logister.scss';
import Login from '../../components/Login/login';
import { login } from '../../actions/logister';
import Register from '../../components/Register/register';
import { connect } from 'react-redux';

function Logister() {
    const [key, setKey] = useState('login');

    return (
        <Tabs
            id="logister-tab-control"
            activeKey={key}
            onSelect={(k) => setKey(k)}>

            <Tab eventKey="login" title="Login">
                <Login onSubmit={this.props.login} />
            </Tab>
            <Tab eventKey="register" title="Register">
                <Register />
            </Tab>
        </Tabs>
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