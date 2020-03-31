
import { combineReducers } from 'redux';
import state from './usersReducer';
import requests from './requestsReducer';

export default combineReducers({
    state: state,
    requests: requests
});