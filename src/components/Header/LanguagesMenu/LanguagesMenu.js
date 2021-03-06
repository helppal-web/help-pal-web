import React from 'react';
import LanguageIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export default (props) => {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleLanguageMenuItemClick = (lang) => {
        if (lang !== i18n.language) {
            localStorage.setItem('i18nextLng', `${lang}`);
            i18n.changeLanguage(lang);
            document.body.style.direction = i18n.dir();
        }
        handleClose();
    };

    return (
        <div className="languages-menu-wrapper">
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="languages-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                < LanguageIcon />
                <ExpandMoreIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="language-menu"
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.languages.map(language => (
                    <MenuItem
                        key={language.code}
                        selected={i18n.language === language.code}
                        onClick={() => handleLanguageMenuItemClick(language.code)}
                    >
                        {language.text}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}