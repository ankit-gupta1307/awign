export default function reducer(state={
	projectList: [],
	projectListError: '',
	createProjectSuccess: '',
	createProjectError: ''
}, action) {
	switch (action.type) {	
		case 'GET_PROJECLIST_SUCCESS': {
			return {
				...state,
				projectList: action.payload,
				projectListError: ''
			}
		}
		case 'GET_PROJECLIST_REJECTED': {
			return {
				...state,
				projectList: [],
				projectListError: action.payload
			}
		}
		case 'CREATE_PROJECT_SUCCESS': {
			return {
				...state,
				createProjectSuccess: action.payload,
				createProjectError: ''
			}
		}
		case 'CREATE_PROJECT_REJECTED': {
			return {
				...state,
				createProjectSuccess: [],
				createProjectError: action.payload
			}
		}
		case 'CLOSE_ALERT': {
			return {
				...state,
				createProjectSuccess: '',
				createProjectError: ''
			}
		}
	}
	return state

}