export function updateGyms(item){
	return {
		type: "UPDATE_GYMS",
		payload: {
			gyms : item
		}
	}
}