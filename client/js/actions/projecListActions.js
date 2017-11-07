import ajax from 'functions/ajax';
import _ from 'lodash';
import { history } from 'store';
import axios from 'axios';

export function getProjects() {
  return function(dispatch) {
    axios.get('http://demo6047413.mockable.io/projectList')
      .then((response) => {
        console.log('response', response);
        if(response.status == '200') {
          dispatch({type: 'GET_PROJECLIST_SUCCESS', payload: response.data});
        } else {
          dispatch({type: 'GET_PROJECLIST_REJECTED', payload: 'Some problem in fetching data'});
        }
      })
      .catch((err) => {
        if(typeof(err) != 'string') {
          err= 'Some problem in fetching data'
        }
        dispatch({type: 'GET_PROJECLIST_REJECTED', payload: err});
      });
   };
}

export function createProject(title, managerID, deliveryDate, tentativeCompletionDate, internsRequired) {
  return function(dispatch) {
    axios.post('http://demo6047413.mockable.io/createProject', {
      data: {
        title,
        managerID,
        deliveryDate,
        tentativeCompletionDate,
        internsRequired
      }
    })
      .then((response) => {
        console.log('response', response);
        if(response.status == '200') {
          dispatch({type: 'CREATE_PROJECT_SUCCESS', payload: response.data});
        } else {
          dispatch({type: 'CREATE_PROJECT_REJECTED', payload: 'Some problem in fetching data'});
        }
      })
      .catch((err) => {
        if(typeof(err) != 'string') {
          err= 'Some problem in fetching data'
        }
        dispatch({type: 'CREATE_PROJECT_SUCCESS', payload: err});
      });
   };
}

export function closeAlert() {
  return {
    type: 'CLOSE_ALERT'
  }
}