import {
	FETCH_REQUESTS,
	FETCH_USER_REQUESTS,
	CREATE_REQUEST
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
			requests: Object.assign({}, action.request)
		}


		case FETCH_REQUESTS:
			return {
				...state,
				requests: action.requests
			}

		case UPDATE_REQUEST:
			return {
				...state,
				requests: state.requests.map(request => item._id === contact._id ? contact : item),
			}

		default:
			return state;
	}
}