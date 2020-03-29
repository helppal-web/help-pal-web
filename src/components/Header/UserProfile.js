
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';



class UserProfile extends Component {

    state = {
        anchorEl: null,
        isMenuOpen: false
    }

    handleProfileMenuOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget, isMenuOpen: true })
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null, isMenuOpen: false })
    };

    render() {
        return (
            <div class="user-profile-wrapper">
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
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    id="profile-menu"
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={this.state.isMenuOpen}
                    onClose={this.handleMenuClose}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default UserProfile;