export default function reducer(state={
	isLoggedIn: false,
	loginError: ''
}, action) {
	switch (action.type) {	
		case 'LOGIN_SUCCESS': {
			return {
				...state,
				isLoggedIn: action.payload.data.status,
				loginError: ''
			}
		}
		case 'LOGIN_REJECTED': {
			return {
				...state,
				isLoggedIn: false,
				loginError: action.payload
			}
		}
	}
	return state

}