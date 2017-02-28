import { authReq, request } from 'store/api'

const endpoints = {
  list: () => request({
    method: 'GET',
    url: '/challenges',
  }),

  show: (params) => request({
    method: 'GET',
    url: `/challenges/${params.id}`,
  }),

  create: (params) => authReq({
    method: 'POST',
    url: '/challenges',
    data: params,
  }),

  update: (params) => authReq({
    method: 'PUT',
    url: `/challenges/${params.id}`,
    data: params,
  }),

  delete: (params) => authReq({
    method: 'DELETE',
    url: `/challenges/${params.id}`,
    data: params,
  }),
}

export default endpoints
