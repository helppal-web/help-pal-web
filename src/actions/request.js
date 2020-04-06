import { FETCH_REQUESTS, CREATE_REQUEST, UPDATE_REQUEST } from './types';
import * as Config from '../config/config';
import axios from 'axios';
import {requests} from '../mockData';

const requestsEndpoint = '/requests'

export const createRequest = (request) => {
    return (dispatch) => {
        return axios.post(`${Config.serverUrl}${requestsEndpoint}`, request)
            .then(response => {
                dispatch(createRequestSuccess(response.data));
            })
            .catch(error => {
                alert('An error has occured');
                throw (error);
            });
        // requests.push(request)
        // return dispatch(createRequestSuccess(request));
    }
}

export const createRequestSuccess = (data) => {
    return {
        type: CREATE_REQUEST,
        request: data
    }
}

export const fetchAllRequests = () => {
    return (dispatch) => {
        return axios.get(`${Config.serverUrl}${requestsEndpoint}`, {})
            .then(response => {
                dispatch(fetchRequestsSuccess(response.data));
            })
            .catch(error => {
                console.error('An error has occured', error);
                throw (error);
            });
        // const hardCodedRequests = requests;
        // return dispatch(fetchRequestsSuccess(hardCodedRequests));
    }
}

export const fetchRequestsSuccess = (data) => {
    return {
        type: FETCH_REQUESTS,
        requests: data,
        count: data.length
    }
};


export const updateRequest = (data) => {
    return (dispatch) => {
        return axios.put(Config.serverUrl + '/requests', data)
            .then(response => {
                dispatch(updateRequestSuccess(response.data));
            })
            .catch(error => {
                console.error('An error has occured', error);
                throw (error);
            });
    }
}

export const updateRequestSuccess = (data) => {
    return {
        type: UPDATE_REQUEST,
        request: data
    }
};