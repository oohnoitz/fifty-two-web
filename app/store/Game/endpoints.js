import { authReq, request } from 'store/api'

const endpoints = {
  create: (params) => authReq({
    method: 'POST',
    url: '/games',
    data: params,
  }),

  update: (params) => authReq({
    method: 'PUT',
    url: `/games/${params.id}`,
    data: params,
  }),

  delete: (params) => authReq({
    method: 'DELETE',
    url: `/games/${params.id}`,
    data: params,
  }),
}

export default endpoints
