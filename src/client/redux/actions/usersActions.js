export function updateGyms(item){
	return {
		type: "UPDATE_USERS",
		payload: {
			users : item
		}
	}
}