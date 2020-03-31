
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Menu, MenuItem }  from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useTranslation } from 'react-i18next';


export default () => {

    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="user-profile-wrapper">
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="profile-menu"
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem >{t('Profile')}</MenuItem>
                <MenuItem >{t('Logout')}</MenuItem>
            </Menu>
        </div>
    )
}