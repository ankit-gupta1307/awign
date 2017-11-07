export default function reducer(state={
	internList: [],
	internListError: '',
	departmentsList: [],
	departmentsListError: '',
	rolesList: [],
	rolesListError: '',
	createInternSuccess: '',
	createInternError: ''
}, action) {
	switch (action.type) {	
		case 'GET_INTERN_LIST_SUCCESS': {
			return {
				...state,
				internList: action.payload,
				internListError: ''
			}
		}
		case 'GET_INTERN_LIST_REJECTED': {
			return {
				...state,
				internList: [],
				internListError: action.payload
			}
		}
		case 'GET_DEPARTMENTS_SUCCESS': {
			return {
				...state,
				departmentsList: action.payload,
				departmentsListError: ''
			}
		}
		case 'GET_DEPARTMENTS_REJECTED': {
			return {
				...state,
				departmentsList: [],
				departmentsListError: action.payload
			}
		}
		case 'GET_ROLES_SUCCESS': {
			return {
				...state,
				rolesList: action.payload,
				rolesListError: ''
			}
		}
		case 'GET_ROLES_REJECTED': {
			return {
				...state,
				rolesList: [],
				rolesListError: action.payload
			}
		}

		case 'CREATE_INTERN_SUCCESS': {
			return {
				...state,
				createInternSuccess: action.payload,
				createInternError: ''
			}
		}

		case 'CREATE_INTERN_REJECTED': {
			return {
				...state,
				createInternSuccess: '',
				createInternError: action.payload
			}
		}

		case 'CLOSE_ALERT_INTERN': {
			return {
				...state,
				createInternSuccess: '',
				createInternError: ''
			}
		}
	}
	return state

}