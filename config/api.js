import * as axiosApp from 'axios'

const marvelApi = axiosApp.default.create({
  timeout: 5000
})

export {
  marvelApi
}