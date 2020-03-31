import {
	FETCH_REQUESTS
} from '../actions/types';

const initState = {
	notifications: [],
	isLoading: true
}

export default (state = initState, action) => {
	switch (action.type) {

		case FETCH_REQUESTS:
			return {
				...state,
				notifications: action.notifications
			}

		default:
			return state;
	}
}