import { Router } from 'express'
import HomeController from '../../controllers/admin/home_controller'

let router = Router()

router.get('/', HomeController.index)
router.get('/log', HomeController.log)

export default router
