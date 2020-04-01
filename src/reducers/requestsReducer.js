import {
	FETCH_REQUESTS
} from '../actions/types';

const initState = {
	requests: [],
	isLoading: true
}

export default (state = initState, action) => {
	switch (action.type) {

		case FETCH_REQUESTS:
			return {
				...state,
				requests: action.requests
			}

		default:
			return state;
	}
}