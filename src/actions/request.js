
import { CANCEL_REQUEST, ACCEPT_REQUEST, FETCH_REQUESTS, FETCH_USER_REQUESTS, CREATE_REQUEST } from './types';
import * as Config from '../config/config';
import axios from 'axios';

export const createRequest = (request) => {
    console.log('req action:' , request);
    return (dispatch) => {
        // TODO: Change according to Backend
        return axios.post(`${Config.serverUrl}/create_request`, request)
            .then(response => {
                // TODO: Change according to Backend
                dispatch(createRequestSuccess(response.data));
            })
            .catch(error => {
                alert('An error has occured');
                throw (error);
            });
    }
}

export const createRequestSuccess = (data) => {
    // TODO: Update state with response
    return {
        type: CREATE_REQUEST,
        payload: data
    }
}

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

export const fetchAllRequests = () => {
    return (dispatch) => {
        // TODO: Change according to Backend
        // return axios.get(Config.serverUrl + '/requests', { })
        //  .then(response => {
        //      // TODO: Change according to Backend
        //      dispatch(fetchRequestsSuccess(response.data));
        //  })
        //  .catch(error => {
        //      alert('An error has occured');
        //      throw (error);
        //  });
        const hardCodedRequests = [
            {
                id: 1,
                location: { lat: 32.078044, lon: 34.774198 },
                onlyPreviousHelpers: false,
                status: 'Assigned',
                destProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
                ownerProfile: { id: 3, name: 'Omer Fishman', email: 'omerfishman.work@gmail.com', phoneNumber: '0522123456', image: undefined, address: '', coords: { lat: 32.075044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 2, badge: false, birthYear: 1988, score: 12 },
                responderProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
                billPhoto: undefined,
                bagsPhoto: undefined,
                purchaseSum: 0,
                category: 'Supermarket',
                priority: 'High',
                name: 'Omer Fishman',
                phoneNumber: '0522424395',
                address: 'King George 68, Tel-Aviv, Israel',
                comments: "Take your Time"
            },
            {
                id: 2,
                location: { lat: 32.075044, lon: 34.794198 },
                onlyPreviousHelpers: false,
                status: 'Open',
                ownerProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
                destProfile: { id: 3, name: 'Omer Fishman', email: 'omerfishman.work@gmail.com', phoneNumber: '0522123456', image: undefined, address: '', coords: { lat: 32.075044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 2, badge: false, birthYear: 1988, score: 12 },
                responderProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
                billPhoto: undefined,
                bagsPhoto: undefined,
                purchaseSum: 0,
                category: 'Medicine',
                priority: 'Low',
                name: 'Omer Fishman',
                phoneNumber: '0522424395',
                address: 'King George 68, Tel-Aviv, Israel',
                description: "Be fast please!!"
            }
        ]
        return dispatch(fetchRequestsSuccess({ count: hardCodedRequests.length, requests: hardCodedRequests }));
    }
}

export const fetchRequestsSuccess = (data) => {
    return {
        type: FETCH_REQUESTS,
        requests: data.requests,
        count: data.count
    }
};

export const fetchUserRequests = (user_id) => {
    return (dispatch) => {
        // TODO: Change according to Backend
        // return axios.post(Config.serverUrl + '/fetch_user_requests', { user_id })
        //  .then(response => {
        //      // TODO: Change according to Backend
        //      dispatch(fetchRequestsSuccess(response.data));
        //  })
        //  .catch(error => {
        //      alert('An error has occured');
        //      throw (error);
        //  });
        const hardCodedRequests = [
            {
                id: 1,
                location: { lat: 32.078044, lon: 34.774198 },
                onlyPreviousHelpers: false,
                status: 'Assigned',
                destProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
                ownerProfile: { id: 3, name: 'Omer Fishman', email: 'omerfishman.work@gmail.com', phoneNumber: '0522123456', image: undefined, address: '', coords: { lat: 32.075044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 2, badge: false, birthYear: 1988, score: 12 },
                responderProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
                billPhoto: undefined,
                bagsPhoto: undefined,
                purchaseSum: 0,
                category: 'Supermarket',
                priority: 'High',
                name: 'Omer Fishman',
                phoneNumber: '0522424395',
                address: 'King George 68, Tel-Aviv, Israel',
                comments: "Take your Time"
            },
            {
                id: 2,
                location: { lat: 32.075044, lon: 34.794198 },
                onlyPreviousHelpers: false,
                status: 'Assigned',
                ownerProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
                destProfile: { id: 3, name: 'Omer Fishman', email: 'omerfishman.work@gmail.com', phoneNumber: '0522123456', image: undefined, address: '', coords: { lat: 32.075044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 2, badge: false, birthYear: 1988, score: 12 },
                responderProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
                billPhoto: undefined,
                bagsPhoto: undefined,
                purchaseSum: 0,
                category: 'Medicine',
                priority: 'Low',
                name: 'Omer Fishman',
                phoneNumber: '0522424395',
                address: 'King George 68, Tel-Aviv, Israel',
                description: "Be fast please!!"
            }
        ]
        return dispatch(fetchUserRequestsSuccess({ count: hardCodedRequests.length, requests: hardCodedRequests }));
    }
}

export const fetchUserRequestsSuccess = (data) => {
    return {
        type: FETCH_USER_REQUESTS,
        myRequests: data.requests,
        count: data.count
    }
};
