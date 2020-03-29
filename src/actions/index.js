
import { FETCH_SEEKERS, CREATE_USER, EDIT_USER } from './types';
import * as Config from '../config/config';
import axios from 'axios';

export const createUser = (user) => {
	return (dispatch) => {
		// TODO: Change according to Backend
		return axios.post(`${Config.serverUrl}/create_user`, user)
			.then(response => {
				// TODO: Change according to Backend
				dispatch(createUserSuccess(response.data));
			})
			.catch(error => {
				alert('An error has occured');
				throw (error);
			});
	}
}

export const createUserSuccess = (data) => {
	// TODO: Update state with response
	return {
		type: CREATE_USER,
		payload: data
	}
}

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

export const fetchAllSeekers = (page = 0) => {
	return (dispatch) => {
		// TODO: Change according to Backend
		// return axios.post(Config.serverUrl + '/fetch_SEFETCH_SEEKERS', { page })
		// 	.then(response => {
		// 		// TODO: Change according to Backend
		// 		dispatch(fetchSeekersSuccess(response.data));
		// 	})
		// 	.catch(error => {
		// 		alert('An error has occured');
		// 		throw (error);
		// 	});
		let hardCodedSeekers = [
			{ id: 1, name: 'Blah Blah', email: 'omerfishman.work@gmail.com', cellPhone: '0524280879', profileImage: undefined },
			{ id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', cellPhone: '0505123456', profileImage: undefined },
			{ id: 3, name: 'Omer Fishman', email: 'omerfishman.work@gmail.com', cellPhone: '0522123456', profileImage: undefined }
		]
		return dispatch(fetchSeekersSuccess({ count: hardCodedSeekers.length, seekers: hardCodedSeekers }));
	}
}

export const fetchSeekersSuccess = (data) => {
	return {
		type: FETCH_SEEKERS,
		seekers: data.seekers,
		count: data.count
	}
};