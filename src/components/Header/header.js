import React, { Component } from 'react';
import './header.scss';
import HelpPal_logo from '../../assets/HelpPal-Logo.svg';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withTranslation } from 'react-i18next';
import UserProfile from "./UserProfileMenu/UserProfileMenu";
import LanguagesMenu from './LanguagesMenu/LanguagesMenu'
import NotificationsMenu from './NotificationsMenu/NotificationsMenu'
import * as Config from '../../config/config';


class Header extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="app-bar" >
                <AppBar className="helppal-bar">
                    <Toolbar>
                        <div className="toolbar align-items-center mx-4">
                            <div className="app-logo-wrapper">
                                <h1>
                                    <Link to='/'>
                                        <img height="60" alt='HelpPal' src={HelpPal_logo} />
                                    </Link >
                                </h1>
                            </div>
                            <div className="user-actions-wrapper">
                                <NotificationsMenu></NotificationsMenu>
                                <LanguagesMenu languages={Config.languages}></LanguagesMenu>
                                <UserProfile></UserProfile>
                            </div>

                        </div>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}

export default withTranslation()(Header);
