import { marvelApi } from '../config/api.js'
import { Character } from '../models/character.js'

function search(req, res) {
  marvelApi.get(`http://gateway.marvel.com/v1/public/characters?&ts=1&apikey=f5fd89757a7f10387ce423f3f28c64df&hash=aaef7f942c150ae767af53eb559c9708&name=${req.body.query}`)
    .then(character => res.json(character.data))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
  })
}

function addToTeam(req, res) {
  Character.create(req.body.query) // is this right?
  .then(character => res.status(201).json(character))
  req.body.added_by = req.user.profile
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addToComic(req, res) {
  
}


export {
  search,
  addToTeam,
  addToComic,
}