import { Router } from 'express'
import HomeController from '../../controllers/admin/home_controller'

let router = Router()

router.get('/', HomeController.index)
router.get('/log', HomeController.log)
router.post('/blog/save', HomeController.savePost)
router.post('/blog/list', HomeController.getListPost)
router.post('/blog/get-post', HomeController.getPost)
router.put('/blog/save', HomeController.updatePost)
router.post('/blog/delete', HomeController.deletePost)
router.post('/blog/get-statistic', HomeController.getStatisticPost)
router.post('/get-profile', HomeController.getProfile)
router.post('/save-profile', HomeController.saveProfile)
router.post('/do-login', HomeController.doLogin)
router.post('/do-logout', HomeController.doLogout)
router.post('/check-auth', HomeController.checkAuth)

export default router
