import ajax from 'functions/ajax';
import _ from 'lodash';
import { history } from 'store';
import axios from 'axios';

export function getTasks(projectID) {
  return function(dispatch) {
    axios.get('http://demo6047413.mockable.io/taskList/' + projectID)
      .then((response) => {
        console.log('response', response);
        if(response.status == '200') {
          dispatch({type: 'GET_TASKSLIST_SUCCESS', payload: response.data});
        } else {
          dispatch({type: 'GET_TASKSLIST_REJECETED', payload: 'Some problem in fetching data'});
        }
      })
      .catch((err) => {
        if(typeof(err) != 'string') {
          err= 'Some problem in fetching data'
        }
        dispatch({type: 'GET_TASKSLIST_REJECETED', payload: err});
      });
   };
}

export function getAllTasksList() {
  return function(dispatch) {
    axios.get('http://demo6047413.mockable.io/allTaskList')
      .then((response) => {
        console.log('response', response);
        if(response.status == '200') {
          dispatch({type: 'GET_ALLTASKSLIST_SUCCESS', payload: response.data});
        } else {
          dispatch({type: 'GET_ALLTASKSLIST_REJECETED', payload: 'Some problem in fetching data'});
        }
      })
      .catch((err) => {
        if(typeof(err) != 'string') {
          err= 'Some problem in fetching data'
        }
        dispatch({type: 'GET_ALLTASKSLIST_REJECETED', payload: err});
      });
   };
}

export function createTask(projectID, taskName, internID, department, deliveryDate, tentativeCompletionDate) {
  return function(dispatch) {
    axios.post('http://demo6047413.mockable.io/createProject', {
      data: {
        projectID,
        taskName,
        internID,
        department,
        deliveryDate,
        tentativeCompletionDate
      }
    })
      .then((response) => {
        console.log('response', response);
        if(response.status == '200') {
          dispatch(getTasks(projectID));
          dispatch({type: 'CREATE_TASK_SUCCESS', payload: response.data});
        } else {
          dispatch({type: 'CREATE_TASK_REJECTED', payload: 'Some problem in fetching data'});
        }
      })
      .catch((err) => {
        if(typeof(err) != 'string') {
          err= 'Some problem in fetching data'
        }
        dispatch({type: 'CREATE_TASK_REJECTED', payload: err});
      });
   };
}

export function closeAlert() {
  return {
    type: 'CLOSE_ALERT_TASK'
  }
}