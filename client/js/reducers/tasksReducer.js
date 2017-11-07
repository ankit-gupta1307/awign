export default function reducer(state={
	tasksList: [],
	tasksListError: '',
	allTaskList: [],
	allTaskListError: '',
	createTaskSuccess: '',
	createTaskError: ''
}, action) {
	switch (action.type) {	
		case 'GET_TASKSLIST_SUCCESS': {
			return {
				...state,
				tasksList: action.payload,
				tasksListError: ''
			}
		}
		case 'GET_TASKSLIST_REJECETED': {
			return {
				...state,
				tasksList: [],
				tasksListError: action.payload
			}
		}
		case 'GET_ALLTASKSLIST_SUCCESS': {
			return {
				...state,
				allTaskList: action.payload,
				allTaskListError: ''
			}
		}
		case 'GET_ALLTASKSLIST_REJECETED': {
			return {
				...state,
				allTaskList: [],
				allTaskListError: action.payload
			}
		}
		case 'CREATE_TASK_SUCCESS': {
			return {
				...state,
				createTaskSuccess: action.payload,
				createTaskError: ''
			}
		}
		case 'CREATE_TASK_REJECTED': {
			return {
				...state,
				createTaskSuccess: '',
				createTaskError: action.payload
			}
		}
		case 'CLOSE_ALERT_TASK': {
			return {
				...state,
				createTaskSuccess: '',
				createTaskError: ''
			}
		}
	}
	return state

}