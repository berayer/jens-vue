import Axios from 'axios'

const http = Axios.create({
  baseURL: '/v2',
  timeout: 5000
})

http.interceptors.request.use((config) => {
  console.log(config)
  return config
})

http.interceptors.response.use(
  (res) => {
    console.log(res)
    return res
  },
  (error) => {
    console.log(error)
  }
)

export default http
