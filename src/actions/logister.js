
import { FETCH_SEEKERS, CREATE_USER, EDIT_USER } from './types';
import * as Config from '../config/config';
import axios from 'axios';

export const login = (user) => {
    return (dispatch) => {
        // TODO: Change according to Backend
        return axios.post(`${Config.serverUrl}/login`, user)
            .then(response => {
                // TODO: Change according to Backend
                dispatch(loginSuccess(response.data));
            })
            .catch(error => {
                alert('An error has occured');
                throw (error);
            });
    }
}


export const loginSuccess = (data) => {
    // TODO: Update state with response
    return {
        type: LOGGED_IN_USER,
        user: data
    }
}
