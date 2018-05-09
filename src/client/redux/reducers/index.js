import { combineReducers } from 'redux';

import gyms from './gymsReducer.js';
import users from './usersReducer.js';

export default combineReducers({
	gyms,
	users
})