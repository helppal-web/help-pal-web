import './NotificationsMenu.scss'
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Menu, MenuItem } from '@material-ui/core';
import history from "../../../helpers/history";
import { connect } from 'react-redux';
import { APP_PATHS } from '../../../App'
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

function NotificationsMenu({ notificationsStore }) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationsMenuItemClick = () => {
        history.push(`${APP_PATHS.notifications}`);

        handleClose();
    }

    return (
        <div className="notifications-menu-wrapper">
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="notifications-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                <NotificationsIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="notifications-menu"
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {notificationsStore.notifications.map((item, index) => (
                    <div key={index}>
                        <Divider />
                        <MenuItem

                            onClick={() => handleNotificationsMenuItemClick()}
                        >
                            {item.text}
                        </MenuItem>
                    </div>


                ))}
                <Divider />
                <Link className='link' to='/notificaitons'>
                    See all in notifications
                </Link>
            </Menu>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        notificationsStore: store.notifications
    }
}

export default connect(mapStateToProps)(NotificationsMenu)