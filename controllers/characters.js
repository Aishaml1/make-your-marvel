import { marvelApi } from '../config/api.js'

function search(req, res) {
  marvelApi.get(`http://gateway.marvel.com/v1/public/characters?&ts=1&apikey=f5fd89757a7f10387ce423f3f28c64df&hash=aaef7f942c150ae767af53eb559c9708`)
    .then(character => {
      console.log("response", character)
      res.json(character.data) 
    })
}


export {
  search
}