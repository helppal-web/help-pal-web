
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Menu, MenuItem } from '@material-ui/core';
import UserProfileImage from "../../../assets/profile-pic-header.svg";
import ArrowDown from "../../../assets/arrow-down.svg";
import { useTranslation } from 'react-i18next';
import history from "../../../helpers/history";
import { APP_PATHS } from '../../../App'
import { clearStorage } from '../../../helpers';
import "./UserProfileMenu.scss";

export default () => {

    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileMenuItemClick = () => {
        history.push(`${APP_PATHS.profile}`);
        handleClose();
    }

    const handleLogout = () => {
        const removed = clearStorage();
        if (removed) {
            // Forces refresh - completely clears state, storage was cleared above.
            setTimeout(() => {
                window.location.href = '/login';
            });
        }

    }

    return (
        <div className="user-profile-menu-wrapper">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="profile-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        color="inherit"

                    >

                        <img className="profile-img" src={UserProfileImage}></img>
                        <label className="profile-name mb-0 ml-2 mr-2"> Test User</label>
                        <img className="open-menu-img" src={ArrowDown}></img>
                    </IconButton>
                </div>
                
            </div>
            <Menu
                anchorEl={anchorEl}
                id="profile-menu"
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleProfileMenuItemClick()} >{t('Profile')}</MenuItem>
                <MenuItem onClick={handleLogout}>{t('Logout')}</MenuItem>
            </Menu>
        </div >
    )
}