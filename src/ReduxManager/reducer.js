const initialState = { isReady: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_APP_READY':
      return { ...state, isReady: Boolean(action.payload) };
    default:
      return state;
  }
}
