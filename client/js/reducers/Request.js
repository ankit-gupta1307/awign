
export default function reducer(state={
  isFetching: falase
}, action) {
  switch (action.type){
    case 'REQUEST_POSTS':
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
    break;
    case 'RECEIVE_POSTS':
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      lastUpdated: action.receivedAt
    });
    break;
    default:
      return state;
}
}