import {
	CREATE_USER,
	EDIT_USER,
	LOGGED_IN_USER,
	FETCH_USER
} from '../actions/types';
import { persistUser } from '../helpers';

const initState = {
	users: [],
	seekers: [],
	isLoading: true,
	currentUser: null
}

export default (state = initState, action) => {
	switch (action.type) {

		case CREATE_USER:
		case EDIT_USER:
			return {
				...state,
				user: action.user
			}

		case LOGGED_IN_USER:
			const { user, rememberMe } = action;

			if (user) {
				persistUser(user, rememberMe);
				return {
					...state,
					currentUser: user
				}
			}
			return state;

		case FETCH_USER:
			const userObj = action.user;

			return {
				...state,
				currentUser: userObj
			}

		default:
			return state;
	}
}