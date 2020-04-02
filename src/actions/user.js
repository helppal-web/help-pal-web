
import { EDIT_USER } from './types';
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