
import { combineReducers } from 'redux';
import user from './usersReducer';
import requests from './requestsReducer';
import notifications from './notificationsReduer';

export default combineReducers({
    user: user,
    requests: requests,
    notifications: notifications,
});