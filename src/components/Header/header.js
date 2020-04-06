import React, { Component } from 'react';
import './header.scss';
import HelpPalLogo from '../../assets/helppal-logo-white.svg';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withTranslation } from 'react-i18next';
import UserProfile from "./UserProfileMenu/UserProfileMenu";
// import NotificationsMenu from './NotificationsMenu/NotificationsMenu'
import { connect } from 'react-redux';


class Header extends Component {
    render() {
        return (
            <div className="app-bar" >
                <AppBar className="helppal-bar">
                    <Toolbar>
                        <div className="toolbar align-items-center mx-4">
                            <div className="app-logo-wrapper">
                                <h1>
                                    <Link className="app-link" to='/'>
                                        <img height="60" alt='HelpPal' src={HelpPalLogo} />
                                    </Link >
                                </h1>
                            </div>
                            <div className="user-actions-wrapper">
                                {/* <NotificationsMenu></NotificationsMenu> */}
                                <UserProfile></UserProfile>
                            </div>

                        </div>
                    </Toolbar>
                </AppBar>

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

export default connect(mapStateToProps)(withTranslation()(Header));