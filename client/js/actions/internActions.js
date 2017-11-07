import ajax from 'functions/ajax';
import _ from 'lodash';
import { history } from 'store';
import axios from 'axios';

export function getInternsList() {
  return function(dispatch) {
    axios.get('http://demo6047413.mockable.io/internList')
      .then((response) => {
        console.log('response', response);
        if(response.status == '200') {
          dispatch({type: 'GET_INTERN_LIST_SUCCESS', payload: response.data});
        } else {
          dispatch({type: 'GET_INTERN_LIST_REJECTED', payload: 'Some problem in fetching data'});
        }
      })
      .catch((err) => {
        if(typeof(err) != 'string') {
          err= 'Some problem in fetching data'
        }
        dispatch({type: 'GET_INTERN_LIST_REJECTED', payload: err});
      });
   };
}

export function getDepartments() {
  return function(dispatch) {
    axios.get('http://demo6047413.mockable.io/departments')
      .then((response) => {
        console.log('response', response);
        if(response.status == '200') {
          dispatch({type: 'GET_DEPARTMENTS_SUCCESS', payload: response.data});
        } else {
          dispatch({type: 'GET_DEPARTMENTS_REJECTED', payload: 'Some problem in fetching data'});
        }
      })
      .catch((err) => {
        if(typeof(err) != 'string') {
          err= 'Some problem in fetching data'
        }
        dispatch({type: 'GET_DEPARTMENTS_REJECTED', payload: err});
      });
   };
}
export function getRoles() {
  return function(dispatch) {
    axios.get('http://demo6047413.mockable.io/roles')
      .then((response) => {
        console.log('response', response);
        if(response.status == '200') {
          dispatch({type: 'GET_ROLES_SUCCESS', payload: response.data});
        } else {
          dispatch({type: 'GET_ROLES_REJECTED', payload: 'Some problem in fetching data'});
        }
      })
      .catch((err) => {
        if(typeof(err) != 'string') {
          err= 'Some problem in fetching data'
        }
        dispatch({type: 'GET_ROLES_REJECTED', payload: err});
      });
   };
}

export function createIntern(name, department, role, taskID, projectID, tentativeCompletionDate) {
  return function(dispatch) {
    axios.post('http://demo6047413.mockable.io/createIntern', {
      data: {
        name,
        department,
        role,
        taskID,
        projectID,
        tentativeCompletionDate
      }
    })
      .then((response) => {
        console.log('response', response);
        if(response.status == '200') {
          dispatch({type: 'CREATE_INTERN_SUCCESS', payload: response.data});
        } else {
          dispatch({type: 'CREATE_INTERN_REJECTED', payload: 'Some problem in fetching data'});
        }
      })
      .catch((err) => {
        if(typeof(err) != 'string') {
          err= 'Some problem in fetching data'
        }
        dispatch({type: 'CREATE_INTERN_REJECTED', payload: err});
      });
   };
}

export function closeAlert() {
  return {
    type: 'CLOSE_ALERT_INTERN'
  }
}
