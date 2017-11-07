
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import history from './historyReducer';
import loginReducer from './loginReducer';
import projectReducer from './projectReducer';
import tasksReducer from './tasksReducer';
import internReducer from './internReducer';

export default combineReducers({
  history,
  routing: routerReducer,
  loginReducer,
  projectReducer,
  tasksReducer,
  internReducer
});
