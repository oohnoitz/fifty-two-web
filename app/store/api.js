import axios from 'axios'

const defaultOptions = {
  method: 'GET',
  data: null,
  url: null,
}

export const authReq = (options = {}) => {
  const payload = {
    ...defaultOptions,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('AuthToken')}`,
      'Content-Type': 'application/json',
    },
    ...options,
  }

  if (payload.url) {
    payload.url = `${API_ENDPOINT}${options.url}`
  }

  return axios(payload)
}

export const request = (options = {}) => {
  const payload = {
    ...defaultOptions,
    ...options,
  }

  if (payload.url) {
    payload.url = `${API_ENDPOINT}${options.url}`
  }

  return axios(payload)
}
