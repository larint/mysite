import { Router } from 'express'
import WebController from '../../controllers/web/web_controller'

let router = Router()

router.post('/get-profile', WebController.getProfile)

export default router
