import {
	CREATE_USER,
	EDIT_USER,
	FETCH_SEEKERS
} from '../actions/types';

const initState = {
	users: [],
	seekers: [],
	isLoading: true
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

		default:
			return state;
	}
}