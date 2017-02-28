import axios from 'axios'

const redirect = (path) => {
  window.location = path
}

export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS'
export const AUTH_SIGNIN_FAILURE = 'AUTH_SIGNIN_FAILURE'
export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS'
export const AUTH_SIGNUP_FAILURE = 'AUTH_SIGNUP_FAILURE'

export const AUTH_RESET = 'AUTH_RESET'

const actions = {
  logout: () => (dispatch) => {
    const token = localStorage.getItem('AuthToken')
    const logout = () => {
      localStorage.removeItem('AuthToken')
      dispatch({
        type: AUTH_RESET,
      })
      redirect('/')
    }

    axios({
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      url: `${API_ENDPOINT}/auth`,
    }).then(logout, logout)
  },

  signin: (params) => (dispatch, getState) => {
    axios({
      method: 'POST',
      data: params,
      url: `${API_ENDPOINT}/auth`,
    }).then(
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
    axios({
      method: 'POST',
      data: params,
      url: `${API_ENDPOINT}/users`,
    }).then(
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
    axios({
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      url: `${API_ENDPOINT}/auth/verify`,
    }).then(
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
