import {
  AUTH_SIGNIN_SUCCESS,
  AUTH_SIGNIN_FAILURE,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAILURE,
  AUTH_RESET,
} from './actions'

const initialState = {
  currentUser: null,
  failed: false,
  errors: [],
}

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_SIGNIN_SUCCESS:
      return {
        ...initialState,
        currentUser: action.payload.user,
      }

    case AUTH_RESET:
      return {
        ...initialState,
      }

    default:
      return {
        ...state,
      }
  }
}

export default reducers
