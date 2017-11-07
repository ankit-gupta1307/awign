import ajax from 'functions/ajax';
import _ from 'lodash';
import { history } from 'store';
import axios from 'axios';

export function doLogin(name, password) {
  return function(dispatch) {
    axios.post('http://demo6047413.mockable.io/login', {
      data: {
        name,
        password
      }
    })
    .then((response) => {
      console.log('response', response);
      if(response.status == 200) {
        dispatch({type: 'LOGIN_SUCCESS', payload: response.data});
      } else {
        dispatch({type: 'LOGIN_REJECTED', payload: "Some problem in fetching data"});
      }
    })
    .catch((err) => {
      if(typeof(err) != 'string') {
        err= 'Some problem in fetching data'
      }
      dispatch({type: 'LOGIN_REJECTED', payload: err});
    });
   };
}