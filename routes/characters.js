import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as charactersCtrl from '../controllers/characters.js'


const router = Router()

// ========= Public Routes ========= 
//localhost:3001/api/characters/
router.get('/', charactersCtrl.search)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

//*Characters 
//localhost:3001/api/characters - POST 
router.post('/:id/add', checkAuth, charactersCtrl.addToTeam)
//localhost:3001/api/character/:id
router.get('/:id', checkAuth, charactersCtrl.show)
//localhost:3001/api/characters/:id
router.delete('/:id', checkAuth, charactersCtrl.delete)

//*Quotes
//localhost:3001/api/characters/:id/quotes
router.post('/:id/quotes', checkAuth, charactersCtrl.createQuote)
//localhost:3001/api/characters/:id/quotes/:quoteId
router.delete('/:id/quotes/:quoteId', checkAuth, charactersCtrl.deleteQuote)
//localhost:3001/api/character/:quoteId/quotes/:quoteId 
router.put('/:id/quotes/:quoteId', checkAuth, charactersCtrl.updateQuote)


export {
  router
}