
import { FETCH_SEEKERS, CREATE_USER, EDIT_USER, FETCH_REQUESTS, FETCH_NOTIFICATIONS } from './types';
import * as Config from '../config/config';
import axios from 'axios';
export * from './request';

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

export const fetchAllSeekers = () => {
	return (dispatch) => {
		// TODO: Change according to Backend
		// return axios.post(Config.serverUrl + '/fetch_SEFETCH_SEEKERS', { })
		// 	.then(response => {
		// 		// TODO: Change according to Backend
		// 		dispatch(fetchSeekersSuccess(response.data));
		// 	})
		// 	.catch(error => {
		// 		alert('An error has occured');
		// 		throw (error);
		// 	});
		let hardCodedSeekers = [
			{ id: 1, name: 'Blah Blah', email: 'omerfishman.work@gmail.com', phoneNumber: '0524280879', image: undefined, address: '', coords: { lat: 32.078044, lon: 34.774198 }, language: ['hebrew', 'english'], cases: 7, badge: false, birthYear: undefined, score: 33 },
			{ id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
			{ id: 3, name: 'Omer Fishman', email: 'omerfishman.work@gmail.com', phoneNumber: '0522123456', image: undefined, address: '', coords: { lat: 32.075044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 2, badge: false, birthYear: 1988, score: 12 },
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

export const fetchAllRequests = () => {
	return (dispatch) => {
		// TODO: Change according to Backend
		// return axios.post(Config.serverUrl + '/fetch_requests', { })
		// 	.then(response => {
		// 		// TODO: Change according to Backend
		// 		dispatch(fetchRequestsSuccess(response.data));
		// 	})
		// 	.catch(error => {
		// 		alert('An error has occured');
		// 		throw (error);
		// 	});
		const hardCodedRequests = [
			{
				category: 'Supermarket',
				priority: 'Whenever',
				forAFriend: false,
				name: 'Omer Fishman',
				friendsName: 'Yosi LoOmer',
				friendsPhoneNumber: '0522424395',
				address: 'King George 68, Tel-Aviv, Israel',
				comments: "Take your Time"
			},
			{
				category: 'Medicine',
				priority: 'Urgent',
				forAFriend: false,
				name: 'Omer Fishman',
				friendsName: 'Yosi LoOmer',
				friendsPhoneNumber: '0522424395',
				address: 'King George 68, Tel-Aviv, Israel',
				comments: "Be fast please!!"
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

export const fetchNotifications = () => {
	return (dispatch) => {
		// TODO: Change according to Backend
		// return axios.post(Config.serverUrl + '/fetch_notifications', { })
		// 	.then(response => {
		// 		// TODO: Change according to Backend
		// 		dispatch(fetchNotificationsSuccess(response.data));
		// 	})
		// 	.catch(error => {
		// 		alert('An error has occured');
		// 		throw (error);
		// 	});
		const hardCodedNotifications = [
			{
				text: 'Your request was submitted',
				date: 'Jan 9, 2014'
			},
			{
				text: 'Volunteer is ready to fill your request',
				date: 'July 20, 2014'
			},
			{
				text: 'Volunteer is sent to you',
				date: 'July 21, 2014'
			}
		]
		return dispatch(fetchNotificationsSuccess({ count: hardCodedNotifications.length, notifications: hardCodedNotifications }));
	}
}

export const fetchNotificationsSuccess = (data) => {
	return {
		type: FETCH_NOTIFICATIONS,
		notifications: data.notifications,
		count: data.count
	}
};