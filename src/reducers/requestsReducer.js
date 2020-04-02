import {
	FETCH_REQUESTS,
	FETCH_USER_REQUESTS
} from '../actions/types';

const initState = {
	requests: [],
	myRequests: [],
	isLoading: true
}

export default (state = initState, action) => {
	switch (action.type) {

		case FETCH_REQUESTS:
			return {
				...state,
				requests: action.requests
			}

		case FETCH_USER_REQUESTS:
			return {
				...state,
				myRequests: action.myRequests
			}

		default:
			return state;
	}
}