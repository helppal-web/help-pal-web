
import { combineReducers } from 'redux';
import state from './usersReducer';
import requests from './requestsReducer';
import notifications from './notificationsReduer';

export default combineReducers({
    state: state,
    requests: requests,
    notifications: notifications
});