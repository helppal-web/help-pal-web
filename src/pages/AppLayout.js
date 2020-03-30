
import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../helpers/history';
import Header from '../components/Header/header';
import Main from './Main/main';
import Profile from './Profile/Profile';

export default class AppLayout extends React.Component {
    render() {
        return (
            <div className="app-layout">
                <Router history={history}>
                    <Header />
                    <Route path='/app' component={Main} />
                    <Route path='/app/profile' component={Profile} />} />
                </Router>
            </div>
        );
    }
}

;
