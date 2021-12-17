import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'

const router = Router()

//localhost:3001/api/characters 
router.get('/', charactersCtrl.search)

router.post('/', charactersCtrl.addToTeam)

router.post('/', charactersCtrl.addToComic)

export {
  router
}
