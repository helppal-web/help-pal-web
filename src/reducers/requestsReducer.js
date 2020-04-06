import {
	FETCH_REQUESTS,
	CREATE_REQUEST,
	UPDATE_REQUEST
} from '../actions/types';

const initState = {
	requests: [],
	myRequests: [],
	isLoading: true
}

export default (state = initState, action) => {
	switch (action.type) {

		case CREATE_REQUEST:
			return {
				...state,
				requests: [...state.requests, action.request]
			}


		case FETCH_REQUESTS:
			return {
				...state,
				requests: action.requests
			}

		case UPDATE_REQUEST:
			return {
				...state,
				requests: state.requests.map(request => request.id === action.request.id ? action.request : request),
			}

		default:
			return state;
	}
}