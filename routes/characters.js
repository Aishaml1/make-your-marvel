import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as charactersCtrl from '../controllers/characters.js'


const router = Router()

// ========= Public Routes ========= 
router.get('/', charactersCtrl.search)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

//*Characters 
//localhost:3001/api/characters - POST 
// router.post('/:id/add', checkAuth, charactersCtrl.addToTeam)

//localhost:3001/api/character/:id
router.get('/:id', checkAuth, charactersCtrl.show)
router.delete('/:id', checkAuth, charactersCtrl.delete)

//*Quotes
//Quotes
router.post('/:id/quotes', checkAuth, charactersCtrl.createQuote)
router.delete('/:id/quotes/:quoteId', checkAuth, charactersCtrl.deleteQuote)



export {
  router
}
