import { Router } from 'express'
import HomeController from '../../controllers/admin/home_controller'

let router = Router()

router.get('/', HomeController.index)
router.get('/log', HomeController.log)
router.post('/blog/save', HomeController.savePost)
router.post('/blog/list', HomeController.getListPost)
router.post('/blog/get-post', HomeController.getPost)
router.put('/blog/save', HomeController.updatePost)

export default router
