import React from 'react';
import './logister.scss';
import Login from '../Login/login';
import Register from '../Register/register';

export default function Logister() {
    const [key, setKey] = useState('login');

    return (
        <Tabs
            id="logister-tab-control"
            activeKey={key}
            onSelect={(k) => setKey(k)}>

            <Tab eventKey="login" title="Login">
                <Login />
            </Tab>
            <Tab eventKey="register" title="Register">
                <Register />
            </Tab>
        </Tabs>
    );
}