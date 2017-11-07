
import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { addHistory } from 'actions/historyActions';
import reducer from "./reducers"

// const middleware =  compose(
//   applyMiddleware(promise(), thunk, logger()),
//   autoRehydrate()
// )

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history)

// export default createStore( reducer, middleware )

const store =  createStore(
  reducer,
  compose(
    applyMiddleware(promise(), thunk, logger(), routeMiddleware)
  )
)

history.listen(location => store.dispatch(addHistory(location)))

export {
  store,
  history
}

// export default function store(middleware) {
// 	createStore( reducer, middleware )
// 	return store = compose(autoRehydrate())(createStore)
// }
