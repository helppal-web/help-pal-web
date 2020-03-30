
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';


class UserProfile extends Component {


    state = {
        ProfileAnchorEl: null,
        isProfileMenuOpen: false
    }

    handleProfileMenuOpen = (event) => {
        this.setState({ ProfileAnchorEl: event.currentTarget, isProfileMenuOpen: true })
    };

    handleProfileMenuClose = () => {
        this.setState({ ProfileAnchorEl: null, isProfileMenuOpen: false })
    };


    render() {
        return (
            <div className="user-profile-wrapper">
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls="profile-menu"
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    anchorEl={this.state.ProfileAnchorEl}
                    id="profile-menu"
                    keepMounted
                    open={this.state.isProfileMenuOpen}
                    onClose={this.handleProfileMenuClose}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default UserProfile;