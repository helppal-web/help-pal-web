import React, { Component } from 'react';
import './header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withTranslation } from 'react-i18next';
import UserProfile from "./UserProfileMenu/UserProfile";
import LanguagesMenu from './LanguagesMenu/LanguagesMenu'
import * as Config from '../../config/config';


class Header extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="app-bar" >
                <AppBar>
                    <Toolbar>
                        <div className="toolbar">
                            <div className="app-logo-wrapper">
                                <h6>{t('Help Pal')}</h6>
                            </div>
                                <div className="user-actions-wrapper">
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
