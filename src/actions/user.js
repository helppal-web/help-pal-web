
import { EDIT_USER, FETCH_USER } from './types';
import * as Config from '../config/config';
import axios from 'axios';

export const editUser = user => {
    return (dispatch) => {
        // TODO: Change according to Backend
        return axios.put(`${Config.serverUrl}/edit_user`, user)
            .then(response => {
                // TODO: Change according to Backend
                dispatch(editUserSuccess(response.data));
            })
            .catch(error => {
                alert('An error has occured');
                throw (error);
            });
    }
}

export const editUserSuccess = (user) => {
    // TODO: Update state with response
    return {
        type: EDIT_USER,
        user: user
    }
}

export const fetchUserById = (id) => {
    return (dispatch) => {
        return axios.get(`${Config.serverUrl}/users/${id}`)
            .then(response => {
                dispatch(fetchUserSuccess(response.data));
            })
            .catch(error => {
                alert('An error has occured');
                throw (error);
            });
    }
}

export const fetchUserSuccess = (user) => {
    // TODO: Update state with response
    return {
        type: FETCH_USER,
        user: user
    }
}