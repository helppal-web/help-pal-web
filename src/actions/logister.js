import { LOGGED_IN_USER } from './types';
import * as Config from '../config/config';
import axios from 'axios';

export const login = ({ email, password, rememberMe }) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.get(Config.serverUrl + '/users/email', {
                params: {
                    email
                }
            }).then(response => {
                if (response) {
                    const { data } = response;
                    if (data.password === password) {
                        dispatch(loginSuccess(response.data, rememberMe));
                        return resolve();
                    }
                    return reject({ wrongPass: true });
                } else {
                    return reject(new Error('An error has occured'));
                }
            }).catch(error => {
                return reject(error);
            });
        });
    }
}

export const loginSuccess = (data, rememberMe) => {
    return {
        type: LOGGED_IN_USER,
        user: data,
        rememberMe
    }
}

export const register = (user) => {
    return (dispatch) => {
        // TODO: Change according to Backend
        return new Promise((resolve, reject) => {
            axios.post(`${Config.serverUrl}/users`, user)
                .then(response => {
                    // TODO: Change according to Backend
                    dispatch(registerSuccess(response.data));
                    resolve(response);
                })
                .catch(error => {
                    alert('An error has occured');
                    reject(error);
                });
        })
    }
}


export const registerSuccess = (data) => {
    // TODO: Update state with response
    return {
        type: LOGGED_IN_USER,
        user: data,
        rememberMe: false
    }
}