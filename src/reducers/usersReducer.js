import {
	CREATE_USER,
	EDIT_USER,
	FETCH_SEEKERS,
	LOGGED_IN_USER
} from '../actions/types';

const initState = {
	users: [],
	seekers: [],
	isLoading: true,
	currentUser: {}
}

export default (state = initState, action) => {
	switch (action.type) {

		case CREATE_USER:
		case EDIT_USER:
			return {
				...state,
				user: action.user
			}

		case FETCH_SEEKERS:
			return {
				...state,
				seekers: action.seekers,
				isLoading: false
			}

		case LOGGED_IN_USER:
			return {
				...state,
				currentUser: action.user
			}

		default:
			return state;
	}
}