export default function reducer( state={
		users: []
	}, action) {

	switch(action.type){
		case 'UPDATE_USERS': {
			return Object.assign({},
				state,
			{ users: (action.payload.users)});
		}
	}
	return state;
}