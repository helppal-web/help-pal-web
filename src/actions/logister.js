
import { LOGGED_IN_USER } from './types';
import * as Config from '../config/config';
import axios from 'axios';
import {users} from '../mockData'
export const login = ({ email, password, rememberMe }) => {

    const getUserByEmail = (email) => {
        return users.filter((user) => user.email === email)
    }
    return (dispatch) => {

        return new Promise((resolve, reject) => {
            const user = getUserByEmail(email);
            if(user) {
                dispatch(loginSuccess(user[0], rememberMe));
            }
            resolve()
            // axios.get(Config.serverUrl + '/users/email', {
            //     params: {
            //         email
            //     }
            // }).then(response => {
            //     if (response) {
            //         const { data } = response;
            //         if (data.password === password) {
            //             dispatch(loginSuccess(response.data, rememberMe));
            //             return resolve();
            //         }
            //         return reject({ wrongPass: true });
            //     } else {
            //         return reject(new Error('An error has occured'));
            //     }
            // }).catch(error => {
            //     return reject(error);
            // });
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
        return axios.post(`${Config.serverUrl}/register`, user)
            .then(response => {
                // TODO: Change according to Backend
                dispatch(registerSuccess(response.data));
            })
            .catch(error => {
                alert('An error has occured');
                throw (error);
            });
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
