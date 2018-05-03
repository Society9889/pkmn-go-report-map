export default function reducer( state={
		gyms: []
	}, action) {

	switch(action.type){
		case 'UPDATE_GYMS': {
			return Object.assign({},
				state,
			{ gyms: (action.payload.gyms)});
		}
	}
	return state;
}