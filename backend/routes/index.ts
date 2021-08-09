import { Router } from "express";
import homeRouter from './home'

let router = Router()

router.use('/', homeRouter)

export { router }
