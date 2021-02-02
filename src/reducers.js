import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from './constants.js';

import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialStateSearch = {
	searchField = ''
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const searchRobots = (state=initialState, action={}) => {
	switch(action.type) {
		case:  CHANGE_SEARCH_FIELD:
		  return Object.assign({}, state, { searchField: action.payload })
		default: 
		  return state;
	}
}


export const searchRobots = (state = initialStateRobots, action={}) => {
	switch(action.type) {
		case: REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case: REQUEST_ROBOTS_SUCCESS:
			return Object.assing({}, state, { robots: action.payload, isPending: false })
		case: REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false })
		default:
			return state;
	}
}