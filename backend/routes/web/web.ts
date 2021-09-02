import { Router } from 'express'
import WebController from '../../controllers/web/web_controller'

let router = Router()

router.post('/get-profile', WebController.getProfile)
router.post('/get-resume', WebController.getResume)
router.post('/get-project', WebController.getProject)
router.post('/get-blog', WebController.getBlog)
router.post('/get-post', WebController.getPost)
router.post('/get-other-post', WebController.getOtherPost)


export default router
