
import { CANCEL_REQUEST, ACCEPT_REQUEST } from './types';
import * as Config from '../config/config';
import axios from 'axios';

export const cancelRequest = (request) => {
    return (dispatch) => {
        // TODO: Change according to Backend
        return axios.post(`${Config.serverUrl}/cancel_request`, request)
            .then(response => {
                // TODO: Change according to Backend
                dispatch(cancelRequestSuccess(response.data));
            })
            .catch(error => {
                alert('An error has occured');
                throw (error);
            });
    }
}

export const cancelRequestSuccess = (data) => {
    // TODO: Update state with response
    return {
        type: CANCEL_REQUEST,
        payload: data
    }
}

export const acceptRequest = (request) => {
    return (dispatch) => {
        // TODO: Change according to Backend
        return axios.put(`${Config.serverUrl}/accept_request`, request)
            .then(response => {
                // TODO: Change according to Backend
                dispatch(acceptRequestSuccess(response.data));
            })
            .catch(error => {
                alert('An error has occured');
                throw (error);
            });
    }
}

export const acceptRequestSuccess = (data) => {
    // TODO: Update state with response
    return {
        type: ACCEPT_REQUEST,
        payload: data
    }
}