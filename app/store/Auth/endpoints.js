import { authReq, request } from 'store/api'

const endpoints = {
  logout: (params) => authReq({
    method: 'DELETE',
    url: `/auth/${params.id}`
  }),

  signin: (params) => request({
    method: 'POST',
    url: '/auth',
    data: params,
  }),

  signup: (params) => request({
    method: 'POST',
    url: '/users',
    data: params,
  }),

  verify: (token) => request({
    method: 'GET',
    url: '/auth/verify',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }),
}

export default endpoints
