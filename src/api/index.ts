import ky from 'ky'

const api = ky.create({
  prefixUrl: import.meta.env.VITE_BACKEND_URL,
  retry: 0,
  hooks: {
    afterResponse: [
      (request, options, response) => {
        //   we can work with responce errors/statuses
        return response
      },
    ],
    beforeRequest: [
      request => {
        //   we can work with request
        return request
      },
    ],
  },
})

export default api
