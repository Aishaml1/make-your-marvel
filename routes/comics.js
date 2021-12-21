import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as comicsCtrl from '../controllers/comics.js'

const router = Router()


// ========= Public Routes ========= 


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

//localhost:3001/api/comics/  - GET 
router.get('/:id', checkAuth, comicsCtrl.searchComic)
//localhost:3001/api/comics/add - POST 
router.post('/', checkAuth, comicsCtrl.addComic)


export {
  router 
}