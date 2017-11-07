
export default function reducer(state = {
    history: [],
  }, action) {
  console.log('historryyyyy',action.type)
  switch (action.type) {
    case 'ADD_HISTORY': {
      return {
        ...state,
        history: [... state.history, action.payload]
      }
    }

    case '@@router/LOCATION_CHANGE': {
      console.log(action.payload.pathname); 
      if (action.payload.pathname.indexOf('/preview') == -1) {
        window.sessionStorage.clear()
      }
      return {
        ...state
      }
    }
  }
  return state;
}
