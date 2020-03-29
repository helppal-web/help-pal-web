import React, { Component } from 'react';
import './header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import UserProfile from "./UserProfile";



const menuId = 'primary-search-account-menu';


class Header extends Component {



    render() {
        return (
            <div className="app-bar" >
                <AppBar>
                    <Toolbar className="toobar">
                        <div className="app-logo-wrapper">
                            <h6>HelpPal</h6>
                        </div>
                        <div className="user-actions-wrapper">
                            <UserProfile></UserProfile>
                        </div>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}

export default Header;