import './Notifications.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {Typography, List, ListItem, ListItemText,IconButton , Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    item: {
        paddingInlineStart: theme.spacing(4),
    },
    itemText: {
        textAlign: 'start',
    },
    listContainer: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


function Notifications({ notificationsStore }) {

    const { t } = useTranslation();

    const handleClick = (index) => {
        console.log('test', index)
    }

    const classes = useStyles();
    const [dense] = React.useState(false);
    return (
        <div>
            <Typography variant="h6" className={classes.title}>
            {t('Notifications')}
          </Typography>
            <div className={classes.listContainer}>
                <List dense={dense} className={classes.root}>
                    {notificationsStore.notifications.map((item, index) => (
                        <div key={index}>
                            <ListItem className={classes.item}>
                                <ListItemText className={classes.itemText}
                                    primary={item.text} secondary={item.date}
                                />
                                <IconButton onClick={() => handleClick(index)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                </List>
            </div>
        </div>
    )
}


const mapStateToProps = (store) => {
    return {
        notificationsStore: store.notifications
    }
}

export default connect(mapStateToProps)(Notifications);