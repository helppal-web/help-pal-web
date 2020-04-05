import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './helpers/history';
import './App.scss';
import AppLayout from './pages/AppLayout';
import Logister from './pages/Logister/Logister';
import Main from './pages/Main/main';
import Profile from './pages/Profile/Profile';
import Notifications from './pages/Notifications/Notifications';
import ActiveRequests from './pages/ActiveRequests/ActiveRequests';
import ActiveResponses from './pages/ActiveResponses/ActiveResponses';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserFromStorage } from './helpers';
import RequestsHistory from "./pages/RequestsHistory/RequestsHistory";
import * as actions from './actions';

export const APP_PATHS = {
    app: '/app',
    profile: '/app/profile',
    activeRequests: '/app/requests/active',
    activeResponses: '/app/responses/active',
    notifications: '/notifications',
    login: '/login',
    register: '/register',
    requestsHistory: '/app/requests/history'
}
class App extends React.Component {
    state = {
        isMobile: true
    };
    componentDidMount() {
        // Handle window resize
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
        document.body.style.direction = this.props.i18n.dir();

        const { currentUser, fetchUserById, fetchAllRequests, fetchNotifications} = this.props;
        const user = getUserFromStorage();
        //fetchAllRequests();
        //fetchNotifications();
        if (user && user.id) {

            if (!currentUser) {
                fetchUserById(user.id).then(() => {
                    fetchAllRequests();
                    fetchNotifications();
                }).catch((err) => {
                    history.push('/login');
                });
            }
        } else {
            history.push('/login');
        }
    }

    resize() {
        let currentMobileState = (window.innerWidth <= 576);
        if (currentMobileState !== this.state.isMobile) {
            this.setState({ isMobile: currentMobileState });
        }
    }
    render() {
        return (<div className={this.state.isMobile ? 'mobile' : 'desktop'} >
            <div className="App" ><Router history={history} >
                <Switch >
                    <Route exact path='/' render={() => < Redirect to={APP_PATHS.app} />} />
                    <AppLayout exact path={APP_PATHS.app} component={Main} />
                    <AppLayout exact path={APP_PATHS.profile} component={Profile} />
                    <AppLayout exact path={APP_PATHS.activeRequests} component={ActiveRequests} />
                    <AppLayout exact path={APP_PATHS.requestsHistory} component={RequestsHistory}></AppLayout>
                    <AppLayout exact path={APP_PATHS.activeResponses} component={ActiveResponses} />
                    <AppLayout exact path={APP_PATHS.notifications} component={Notifications} />
                    <Route exact path={APP_PATHS.login} render={() => < Logister logister={'login'} />} />
                    <Route exact path={APP_PATHS.register} render={() => < Logister logister={'register'} />} />
                </Switch>
            </Router>
            </div>
        </div>
        );
    }
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
        fetchUserById: bindActionCreators(actions.fetchUserById, dispatch),
        fetchAllRequests: bindActionCreators(actions.fetchAllRequests, dispatch),
        fetchNotifications: bindActionCreators(actions.fetchNotifications, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);