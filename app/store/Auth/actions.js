import endpoints from './endpoints'

const redirect = (path) => {
  window.location = path
}

export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS'
export const AUTH_SIGNIN_FAILURE = 'AUTH_SIGNIN_FAILURE'
export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS'
export const AUTH_SIGNUP_FAILURE = 'AUTH_SIGNUP_FAILURE'

export const AUTH_RESET = 'AUTH_RESET'

const actions = {
  logout: () => (dispatch, getState) => {
    const { session } = getState()
    const finish = () => {
      localStorage.removeItem('AuthToken')
      dispatch({ type: AUTH_RESET })
      redirect('/')
    }

    endpoints
      .logout(session.currentUser || {})
      .then(finish, finish)
  },

  signin: (params) => (dispatch, getState) => {
    endpoints
      .signin(params)
      .then(
        (response) => {
          const { data } = response.data
          localStorage.setItem('AuthToken', data.auth)

          dispatch({
            type: AUTH_SIGNIN_SUCCESS,
            payload: data,
          })
          redirect('/')
        },
        (error) => {
          localStorage.removeItem('AuthToken')

          dispatch({
            type: AUTH_SIGNIN_FAILURE,
            payload: error.response,
          })
        }
      )
  },

  signup: (params) => (dispatch, getState) => {
    endpoints
      .signup(params)
      .then(
        (response) => {
          dispatch({
            type: AUTH_SIGNUP_SUCCESS,
            payload: response.data,
          })
          redirect('/')
        },
        (error) => {
          dispatch({
            type: AUTH_SIGNUP_FAILURE,
            payload: error.response,
          })
        }
      )
  },

  verify: (token) => (dispatch, getState) => {
    endpoints
      .verify(token)
      .then(
        (response) => {
          const { data } = response.data

          dispatch({
            type: AUTH_SIGNIN_SUCCESS,
            payload: data,
          })
        },
        (error) => {
          localStorage.removeItem('AuthToken')

          dispatch({
            type: AUTH_RESET,
          })
        }
      )
  },
}

export default actions
